import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Register specific initial child routes instead of exposing group folders */}
      <Stack.Screen name="onboarding/welcome" />
      <Stack.Screen name="(tabs)/index" />
    </Stack>
  );
}
