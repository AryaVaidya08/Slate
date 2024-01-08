import { Dimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import colors from "../../../Constants/Colors"

const timeHeight = 50;
const timeWidth = 65;
const borderWidth = 1;

export default function TimeStamp(props : any) {

    if (props.dayText != "") {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 35}}>
                            <Text style={styles.customTime}>{props.time}  {props.end}</Text>
                            <Text style={styles.dayStyle}>{props.dayText}</Text>
                        </View>  
                    </View>
                    <View style={{backgroundColor: colors.TimeStampBorder, width: 6, height: borderWidth, alignSelf: 'center'}}></View>
                </View>
            </View>
          );
    } else {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.timeText}>{props.time}  {props.end}</Text>
                    </View>
                    <View style={{backgroundColor: colors.TimeStampBorder, width: 6, height: borderWidth, alignSelf: 'center'}}></View>
                </View>
            </View>
          );
    }

}

const styles = StyleSheet.create({
  container: {
    height: timeHeight,
    width: timeWidth,
    justifyContent: 'center',
    borderColor: colors.TimeStampBorder,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
  },
  timeText: {
    fontSize: 16,
    fontFamily: "sequel-sans-semi-bold-disp",
    color: "#949494",
    width: 55,
    paddingRight: 0,
    textAlign: 'left',
  },
  customTime: {
    fontSize: 16,
    fontFamily: "sequel-sans-semi-bold-disp",
    color: "#949494",
    width: 50,
    textAlign: 'left',
  },
  dayStyle: {
    fontSize: 5,
    fontFamily: "sequel-sans-semi-bold-disp",
    color: "#949494",
    width: 10,
  },
});
