import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../../../Constants/Colors';
import calcMinutes from './CalculateMinutes';
import convertTimeToNormal from './ConvertToNormalTime';

const windowWidth = Dimensions.get('window').width;
const eventsWidth = windowWidth - 114
const minuteHeight = 50 / 60

export default function PlannerEvent(props : any) {
  let eventProperties = {
    "eventName" : props.eventName != undefined ? props.eventName : "Missing!",
    "eventDescription" : props.description != undefined ? props.description : "Missing!",
    "color" : props.color != undefined ? props.color : "#000",
    "startTime" : props.startTime != undefined ? props.startTime : "00:00",
    "endTime" : props.endTime != undefined ? props.endTime : "00:10",
    "height" : 0,
    "width" : props.width != undefined ? props.width : eventsWidth,
    "visible" : props.visible != undefined ? props.visible : false,
  };

  eventProperties.height = calcMinutes(eventProperties.startTime, eventProperties.endTime) * minuteHeight

  if (eventProperties.visible == true) {
    return (
      <TouchableOpacity style={{backgroundColor: eventProperties.color, height: eventProperties.height, width: eventProperties.width, borderRadius: 10}}>
        <View style={{paddingHorizontal: 6, paddingVertical: 6}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* Top Area for Name and Time*/}
            <Text style={[styles.nameText]}>{eventProperties.eventName}</Text>
            <Text style={styles.timeText}>{convertTimeToNormal(eventProperties.startTime)} - {convertTimeToNormal(eventProperties.endTime)}</Text>
          </View>
          <View style={{paddingTop: 2}}>
            {/* Bottom Area for Description and location */}
            <Text style={styles.descriptionText}>{eventProperties.eventDescription}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    {/* Just for adding spacers */}
    return (<View style={{backgroundColor: colors.SlateLightBlack, height: eventProperties.height, width: eventProperties.width, borderRadius: 10}}></View>);
  }
}

const styles = StyleSheet.create({
  nameText: {
    fontFamily: "sequel-sans-semi-bold-disp",
    fontSize: 8,
    color: "#fff",
  },
  timeText: {
    fontFamily: "sequel-sans-semi-bold-disp",
    fontSize: 8,
    color: "#fff",

  },
  descriptionText: {
    fontFamily: "sequel-sans-light-disp",
    fontSize: 6,
    color: "#fff",
  }
});
