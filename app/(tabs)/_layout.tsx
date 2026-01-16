import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="categories" options={{ title: "Categories" }} />
      <Tabs.Screen name="scene-matching" options={{ title: "Scene Matching" }} />
      <Tabs.Screen name="evidence-guide" options={{ title: "Evidence Guide" }} />
      <Tabs.Screen name="my" options={{ title: "My" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
