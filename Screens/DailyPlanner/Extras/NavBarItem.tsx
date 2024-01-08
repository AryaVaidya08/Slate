import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../../Constants/Colors';
import imageIconList from '../../../Constants/IconImages';

const itemLengthSize = 65;
const imageSize = 30;
const textHeight = itemLengthSize - imageSize;

export const NavBarItem = (props: any) => {
    let imgSrc = null;

    if (props.iconImageName === 'meals') {
        imgSrc = imageIconList.meals.uri;
    } else if (props.iconImageName === 'planner') {
        imgSrc = imageIconList.planner.uri;
    } else if (props.iconImageName === 'home') {
        imgSrc = imageIconList.home.uri;
    } else if (props.iconImageName === 'todo') {
        imgSrc = imageIconList.todo.uri;
    } else if (props.iconImageName === 'profile') {
        imgSrc = imageIconList.profile.uri;
    }


    return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image source={imgSrc} style={styles.iconImage}/>
        <Text style={styles.iconText}>{props. iconName}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SlateBlack,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: itemLengthSize,
    width: itemLengthSize,
    
  },
  iconImage: {
    height: imageSize,
    width: imageSize,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  iconText: {
    height: textHeight,
    width: itemLengthSize,
    fontSize: 12,
    textAlign: 'center',
    color: "#fff",
    fontFamily: 'sequel-sans-medium-head'
  }
});
