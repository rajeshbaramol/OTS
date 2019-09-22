import React, { Component } from 'react';
import {Box} from 'react-native-design-utility';
import OnBoardingLogo from '../commons/OnBoardingLogo';


class SplashScreen extends Component {
    state={

    }
    componentDidMount(){
this.checkAuth();
    }
    checkAuth=()=>{
setTimeout(() => {
    this.props.navigation.navigate('Auth');
}, 2000);
    }
  render() {
    return (
        <Box f={1} center>
            <OnBoardingLogo></OnBoardingLogo>
        </Box>
    );
  }
}
export default SplashScreen