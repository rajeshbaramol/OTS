import React, {Component}from 'react';
import { UtilityThemeProvider,Box} from 'react-native-design-utility';
import Navigation  from './src/screen';
import{ theme} from './theme';
import { images} from './src/constants/images';
import { cacheImages} from './src/utils/cacheImages';
import {ActivityIndicator,UIManager} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


export default class App extends Component {
    state={
      isReady:false
    }
    componentDidMount() {
      this.cacheAssets();
    }
    cacheAssets=async()=>{
      const imageAssets=cacheImages(Object.values(images));
      await Promise.all([...imageAssets])
      this.setState({
        isReady:true
      })
    }
  
  render(){
    if(!this.state.isReady){
      return(
        <Box f={1} center>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Box>
      )
    }else{
  return (
    <UtilityThemeProvider theme={theme}>
      <Navigation />
      </UtilityThemeProvider>
  );}
}
  }

