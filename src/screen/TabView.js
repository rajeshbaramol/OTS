import React, { Component } from 'react';
import {  Text, Box , } from 'react-native-design-utility';
import OnBoardingLogo from '../commons/OnBoardingLogo';
import {TextInput,Animated,StyleSheet,Button,View,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
const BoxAnimated = Animated.createAnimatedComponent(Box);

class TabViewScroll extends Component {
    state = {
        opacity: new Animated.Value(0),
        position: new Animated.Value(0),
      };
componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
}
opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
    }).start();
  };
  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  onGooglePress = async () => {
    
  };

  onFacebookPress = async () => {
    
  };
  render() {
    const { opacity } = this.state;
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });
    return (
        <Box f={1} center >
            <BoxAnimated f={1} style={{
                                    transform: [{
                                        translateY: logoTranslate,
                                        },
                                    ],
                                    }}>           
                 <Box f={1} center>
                    <OnBoardingLogo/>
                </Box>
            </BoxAnimated>
            <BoxAnimated f={0.9} style={{ opacity }}>
          
            </BoxAnimated>
      </Box>
    );
  }
}
const styles = StyleSheet.create({
    tabStyle: {},
   scrollStyle: {
     backgroundColor: 'white',
     paddingLeft: 65,
     paddingRight: 65,
     // justifyContent: 'center',
   },
   tabBarTextStyle: {
     fontSize: 14,
     fontWeight: 'normal',
   },
   underlineStyle: {
     height: 3,
     backgroundColor: 'red',
     borderRadius: 3,
     width: 15,
   },
 });
export default TabViewScroll
