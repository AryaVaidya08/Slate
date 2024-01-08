import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../../../Constants/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const arrowDim = 35;


export default function HeaderBanner() {
  const dateObj = new Date();
  const localString = dateObj.toLocaleDateString("en-US", {weekday: 'long'});
  
  return (
    <View style={headerStyles.container}>
        <View style={headerStyles.headerBox}>
            <Text style={headerStyles.dateText}>{dateObj.getMonth() + 1 + "/" + (dateObj.getDate()) + "/" + dateObj.getFullYear()}</Text>
            <View style={headerStyles.dateArrowsBox}>
                <TouchableOpacity>
                    <ImageBackground source={require("../../../assets/Images/LeftArrow.png")} style={headerStyles.arrows}>
                    </ImageBackground>
                </TouchableOpacity>

                <Text style={headerStyles.dowText}>{(localString.substring(0, localString.indexOf(",")))}</Text>

                <TouchableOpacity>
                    <ImageBackground source={require("../../../assets/Images/RightArrow.png")} style={headerStyles.arrows}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.SlateMain,
    alignItems: 'center',
    height: 127,
    width: windowWidth,
  },
  headerBox : {
    backgroundColor: colors.SlateMain,
    alignItems: 'center',
  },
  dateArrowsBox : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: windowWidth,
  },
  arrows: {
    height: arrowDim,
    width: arrowDim,
    paddingBottom: 42,
  },
  dateText: {
    color: "#fff",
    fontFamily: 'sequel-sans-semi-bold-disp',
    fontSize: 16,
    paddingTop: 55,
  },
  dowText: {
    color: "#fff",
    fontFamily: 'sequel-sans-semi-bold-disp',
    fontSize: 35,
    paddingBottom: 12,
    paddingHorizontal: 25
  },
});
