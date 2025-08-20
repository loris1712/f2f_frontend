import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    //icone prese da https://icons.expo.fyi/Index
      <Tabs screenOptions = {{tabBarActiveTintColor: "coral"}}>
        <Tabs.Screen name = "index" options = {{title:"Studente", tabBarIcon :({color})=> (
          <MaterialIcons name="school" size={24} color={color} /> //icona per lo studente
        )}}/>
        <Tabs.Screen name = "TeacherScreen" options = {{title:"Professore", tabBarIcon :({color})=> (
          <FontAwesome5 name="chalkboard-teacher" size={24} color={color} /> //icona per il professore
        )}}/>
      </Tabs>
  );

}
