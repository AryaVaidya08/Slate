import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../../../Constants/Colors';
import {NavBarItem} from '../Extras/NavBarItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const barHeight = 80;
const bufferHeight = 0;
const barCornerRadius = 0;

export default function ViewNavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <NavBarItem iconName="Tracker" iconImageName="meals"/>
        <NavBarItem iconName="Planner" iconImageName="planner"/>
        <NavBarItem iconName="Home" iconImageName="home"/>
        <NavBarItem iconName="Todo" iconImageName="todo"/>
        <NavBarItem iconName="Profile" iconImageName="profile"/>
      </View>

      <View style={styles.buffer}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SlateBlack,
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight - barHeight,
    height: barHeight + bufferHeight,
    width: windowWidth,
    //borderRadius: barCornerRadius,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.SlateBlack,
    height: barHeight - bufferHeight,
    width: windowWidth,
    //borderRadius: barCornerRadius,
  },
  buffer: {
    height: bufferHeight,
    width: windowWidth,
    backgroundColor: colors.SlateBlack,
  },
});
