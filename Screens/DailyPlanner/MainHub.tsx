import { StyleSheet, Text, View } from 'react-native';
import HeaderBanner from './Banners/HeaderBanner';
import ViewNavBar from './Banners/ViewNavBar';
import TimelineView from './PlannerViews/TimelineView';
import colors from "../../Constants/Colors"


export default function MainHub() {

  return (
    <View style={styles.container}>
      <HeaderBanner/>
      <TimelineView/>
      <ViewNavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SlateLightBlack,
    alignItems: 'center',
  },
});
