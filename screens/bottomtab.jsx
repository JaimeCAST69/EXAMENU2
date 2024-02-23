import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from "./profile";
import Posts from "./posts";
import PerfilNav from "./PerfilNav";
import Search from "./search";
import Index from "./index";

const Tab = createBottomTabNavigator();
const BottomTab =()=>{
    return(
        
        <Tab.Navigator initialRouteName="Index" >
              <Tab.Screen name="Index" component={Index} options={{headerShown:false, tabBarActiveTintColor:'#089779', tabBarInactiveTintColor:'#002e60', 
                tabBarIcon:({size, color})=> (
                        <MaterialIcons name="home" size={size} color={color}/>
                )                               
            
                }}/>
              
            <Tab.Screen name="Search" component={Search} options={{ headerShown:false, tabBarActiveTintColor:'#089779', tabBarInactiveTintColor:'#002e60', 
                tabBarIcon:({size, color})=> (
                        <MaterialIcons name="person" size={size} color={color}/>
                )                               
                }}
            />
                
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown:false, tabBarActiveTintColor:'#089779', tabBarInactiveTintColor:'#002e60', 
                tabBarIcon:({size, color})=> (
                        <MaterialIcons name="person" size={size} color={color}/>
                )                               
            
                }}
            />
        </Tab.Navigator>
    
)
}



export default BottomTab;