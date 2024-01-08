import { StyleSheet, View, Text } from 'react-native';
import React, {useState, useCallback} from 'react';
import * as Font from 'expo-font';
import MainHub from './Screens/DailyPlanner/MainHub';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



SplashScreen.preventAutoHideAsync();

export default function App() {
  require("./assets/Images/WeightIcon.png");

  const [fontsLoaded] = useFonts({
    'sequel-sans-black-body': require('./assets/Fonts/SequelSansBlackBody.ttf'),
    'sequel-sans-black-disp': require('./assets/Fonts/SequelSansBlackDisp.ttf'),
    'sequel-sans-black-head': require('./assets/Fonts/SequelSansBlackHead.ttf'),

    'sequel-sans-black-obl-body': require('./assets/Fonts/SequelSansBlackOblBody.ttf'),
    'sequel-sans-black-obl-disp': require('./assets/Fonts/SequelSansBlackOblDisp.ttf'),
    'sequel-sans-black-obl-head': require('./assets/Fonts/SequelSansBlackOblHead.ttf'),

    'sequel-sans-bold-body': require('./assets/Fonts/SequelSansBlackBody.ttf'),
    'sequel-sans-bold-disp': require('./assets/Fonts/SequelSansBlackDisp.ttf'),
    'sequel-sans-bold-head': require('./assets/Fonts/SequelSansBlackHead.ttf'),

    'sequel-sans-bold-obl-body': require('./assets/Fonts/SequelSansBlackOblBody.ttf'),
    'sequel-sans-bold-obl-disp': require('./assets/Fonts/SequelSansBlackOblDisp.ttf'),
    'sequel-sans-bold-obl-head': require('./assets/Fonts/SequelSansBlackOblHead.ttf'),

    'sequel-sans-semi-bold-body': require('./assets/Fonts/SequelSansSemiBoldBody.ttf'),
    'sequel-sans-semi-bold-disp': require('./assets/Fonts/SequelSansSemiBoldDisp.ttf'),
    'sequel-sans-semi-bold-head': require('./assets/Fonts/SequelSansSemiBoldHead.ttf'),

    'sequel-sans-semi-bold-obl-body': require('./assets/Fonts/SequelSansSemiBoldOblBody.ttf'),
    'sequel-sans-semi-bold-obl-disp': require('./assets/Fonts/SequelSansSemiBoldOblDisp.ttf'),
    'sequel-sans-semi-bold-obl-head': require('./assets/Fonts/SequelSansSemiBoldOblHead.ttf'),

    'sequel-sans-book-body': require('./assets/Fonts/SequelSansBookBody.ttf'),
    'sequel-sans-book-disp': require('./assets/Fonts/SequelSansBookDisp.ttf'),
    'sequel-sans-book-head': require('./assets/Fonts/SequelSansBookHead.ttf'),

    'sequel-sans-book-obl-body': require('./assets/Fonts/SequelSansBookOblBody.ttf'),
    'sequel-sans-book-obl-disp': require('./assets/Fonts/SequelSansBookOblDisp.ttf'),
    'sequel-sans-book-obl-head': require('./assets/Fonts/SequelSansBookOblHead.ttf'),

    'sequel-sans-heavy-body': require('./assets/Fonts/SequelSansHeavyBody.ttf'),
    'sequel-sans-heavy-disp': require('./assets/Fonts/SequelSansHeavyDisp.ttf'),
    'sequel-sans-heavy-head': require('./assets/Fonts/SequelSansHeavyHead.ttf'),

    'sequel-sans-heavy-obl-body': require('./assets/Fonts/SequelSansHeavyOblBody.ttf'),
    'sequel-sans-heavy-obl-disp': require('./assets/Fonts/SequelSansHeavyOblDisp.ttf'),
    'sequel-sans-heavy-obl-head': require('./assets/Fonts/SequelSansHeavyOblHead.ttf'),

    'sequel-sans-light-body': require('./assets/Fonts/SequelSansLightBody.ttf'),
    'sequel-sans-light-disp': require('./assets/Fonts/SequelSansLightDisp.ttf'),
    'sequel-sans-light-head': require('./assets/Fonts/SequelSansLightHead.ttf'),

    'sequel-sans-light-obl-body': require('./assets/Fonts/SequelSansLightOblBody.ttf'),
    'sequel-sans-light-obl-disp': require('./assets/Fonts/SequelSansLightOblDisp.ttf'),
    'sequel-sans-light-obl-head': require('./assets/Fonts/SequelSansLightOblHead.ttf'),

    'sequel-sans-medium-body': require('./assets/Fonts/SequelSansMediumBody.ttf'),
    'sequel-sans-medium-disp': require('./assets/Fonts/SequelSansMediumDisp.ttf'),
    'sequel-sans-medium-head': require('./assets/Fonts/SequelSansMediumHead.ttf'),

    'sequel-sans-medium-obl-body': require('./assets/Fonts/SequelSansMediumOblBody.ttf'),
    'sequel-sans-medium-obl-disp': require('./assets/Fonts/SequelSansMediumOblDisp.ttf'),
    'sequel-sans-medium-obl-head': require('./assets/Fonts/SequelSansMediumOblHead.ttf'),

    'sequel-sans-oblique-body': require('./assets/Fonts/SequelSansObliqueBody.ttf'),
    'sequel-sans-oblique-disp': require('./assets/Fonts/SequelSansObliqueDisp.ttf'),
    'sequel-sans-oblique-head': require('./assets/Fonts/SequelSansObliqueHead.ttf'),

    'sequel-sans-roman-body': require('./assets/Fonts/SequelSansRomanBody.ttf'),
    'sequel-sans-roman-disp': require('./assets/Fonts/SequelSansRomanDisp.ttf'),
    'sequel-sans-roman-head': require('./assets/Fonts/SequelSansRomanHead.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <MainHub/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
