import Statistics from './content/Statistics';
import Student from './content/Student'
import Log_in_teacher from './content/Log_in_teacher';
import Administer from './content/Administer';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const heads = ['이름', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', '합']
const tails = ['평균', "", "", "", "", "", "", "", "", ""]

const TabNavigation = (props) => (
  <Tab.Navigator
    initialRouteName='Main'
    tabBarOptions={{
      activeBackgroundColor:'skyblue',
      activeTintColor:'blue',
      inactiveBackgroundColor:'yellow',
    }}
  >
    <Tab.Screen name="Main" children={() => 
      <Statistics head = {heads} body = {props.body} setBody = {props.setBody} tail = {tails} 
        teacherClass={props.teacherClass} setTeacherClass={props.setTeacherClass}
        teacherName={props.TeacherName} setTeacherName={props.setTeacherName}/>}/>
    <Tab.Screen name="Student" children={() => <Student head = {heads} body = {props.body} tail = {tails} 
      teacherClass={props.teacherClass} teacherName={props.TeacherName}/>}/>
  </Tab.Navigator>
)

export default function App() {
  const [body, setBody] = useState()
  const [teacherClass, setTeacherClass] = useState()
  const [teacherName, setTeacherName] = useState()

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {() => <Log_in_teacher setTeacherClass={setTeacherClass} setTeacherName={setTeacherName} navigation={useNavigation()}/>}
          </Stack.Screen>
          <Stack.Screen name="Administer" component={Administer}/>
          <Stack.Screen name="Tab">
            {() => <TabNavigation body = {body} setBody={setBody} teacherClass = {teacherClass} teacherName = {teacherName}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}