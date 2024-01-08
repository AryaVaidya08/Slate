import { Dimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import TimeStamp from '../Extras/TimeStamp';
import PlannerEvent from '../Extras/PlannerEvent';
import colors from "../../../Constants/Colors";
import addSpacers from '../Extras/AddEventSpacers';
import {db, ref, get} from "../../../Constants/FirebaseConstants"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const eventsWidth = windowWidth - 114

const times = [["12", "AM", ""], ["1", "AM", ""], ["2", "AM", ""], ["3", "AM", ""], ["4", "AM", ""], ["5", "AM", ""], ["6", "AM", ""], ["7", "AM", ""], ["8", "AM", ""], ["9", "AM", ""], ["10", "AM", ""], ["11", "AM", ""], 
               ["12", "PM", ""], ["1", "PM", ""], ["2", "PM", ""], ["3", "PM", ""], ["4", "PM", ""], ["5", "PM", ""], ["6", "PM", ""], ["7", "PM", ""], ["8", "PM", ""], ["9", "PM", ""], ["10", "PM", ""], ["11", "PM", ""], ["12", "AM", "+1"]]


export default function TimelineView() {
  const [firebaseData, setFirebaseData] = useState([])

  useEffect(() => {
    fetchPlannerDataPromise
  }, [])

  let fetchPlannerDataPromise = new Promise((resolve, reject) => {
    setTimeout( function(): void { 
      get(ref(db, `UserId/DailyPlanner/${"12_27_2023"}`)).then(async (snapshot) => {
      if (snapshot.exists()) {   
          const data = snapshot.val() 
          const dayStuff = JSON.parse(JSON.stringify(data))
          console.log(dayStuff)
          resolve(dayStuff);
        } else {
          reject("No data found!");
          
        }
      }).catch((error) => {
        console.error(error);
      });   
    }, 1000);
  }).then((result : any) => {
    setFirebaseData(result)
  });

  let plannerData = addSpacers(firebaseData);

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Schedule</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingLeft: 24, paddingRight: 10}}>
            {times.map((time, i) => (
              <TimeStamp key={i} time={time[0]} end={time[1]} dayText={time[2]}/>
            ))}
            
          </View>
          <View style={{width: eventsWidth}}>
              {plannerData.map((event, i) => (
                <PlannerEvent
                key={i}
                eventName={event.Title}
                description={event.Description}
                color={event.Color}
                startTime={event.Start}
                endTime={event.End}
                width={eventsWidth}
                visible={event.Visible}
               />
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SlateLightBlack,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    width: windowWidth,
    height: windowHeight,
    paddingBottom: 80,
  },
  scrollContainer: {
    width: windowWidth,
  },
  title_container: {
    justifyContent: 'space-evenly',
    paddingBottom: 5,
  },
  title_text: {
    color: "#fff",
    fontFamily: "sequel-sans-semi-bold-disp",
    fontSize: 24,
    paddingLeft: 24,
    paddingTop: 10,
  }
});
