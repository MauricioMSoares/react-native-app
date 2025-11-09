import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="SecondScreen"
        options={{
          title: "Second Screen",
        }}
      />
    </Tabs>
  )
}