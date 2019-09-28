import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const authNavigator=createStackNavigator(
    {
        Login:{
            getScreen:()=>require('./TabView').default,navigationOptions: {header:null}
        }
    })
const TabNavigator=createBottomTabNavigator({
    Home:{
        getScreen:()=>require('./HomeScreen').default,
        navigationOptions: {header:null }
    },
})

const MainNavigator=createStackNavigator({
Tab:TabNavigator
}
)
const AppNavigator=createSwitchNavigator({
    Splash:{ 
        getScreen:()=>require('./SplashScreen').default
    },
    Auth:authNavigator,
    Main:MainNavigator
    
},{
    headerMode: 'none',
    initialRouteName:'Splash'
})
export default createAppContainer(AppNavigator)