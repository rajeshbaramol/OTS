import React, { Component } from 'react';
import {  Text, Image } from 'react-native';
import {Box} from 'react-native-design-utility';
import { images } from '../constants/images';


 class OnBoardingLogo extends Component {
  render() {
    return (
        <Box  center>
            <Box mb="sm" center>
                <Image source={images.Logo} ></Image>
            </Box>
            <Box>
                <Text>OTS</Text>
            </Box>
        </Box>
    );
  }
}
export default OnBoardingLogo
