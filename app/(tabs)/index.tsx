import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kohi</Text>

      <View style={styles.counters}>
        <View style={styles.counterBox}>
          <Text style={styles.counterNumber}>0</Text>
          <Text style={styles.counterLabel}>Made</Text>
        </View>
        <View style={styles.counterBox}>
          <Text style={styles.counterNumber}>0</Text>
          <Text style={styles.counterLabel}>Tasted</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <Text style={styles.placeholder}>No entries yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 24 },
  counters: { flexDirection: "row", gap: 16, marginBottom: 32 },
  counterBox: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
  },
  counterNumber: { fontSize: 32, fontWeight: "bold" },
  counterLabel: { fontSize: 14, color: "#666", marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  placeholder: { color: "#999" },
});