import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type TextLinkProps = {
  href: string;
  label: string;
};

export function TextLink({ href, label }: TextLinkProps) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  pressable: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    color: "#1F2937",
  },
});
