import React, { Component } from 'react';
import {  Text, Image ,StyleSheet} from 'react-native';
import {Box} from 'react-native-design-utility';
import { images } from '../constants/images';


 class OnBoardingLogo extends Component {
  render() {
    return (
        <Box  center>
            <Box mb="sm" center>
                <Image source={images.Logo}  ></Image>
            </Box>
        </Box>
    );
  }
}
const styles = StyleSheet.create({
   
    
})
export default OnBoardingLogo
