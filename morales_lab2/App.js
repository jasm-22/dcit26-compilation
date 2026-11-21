import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Student Profile</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Jasmin A. Morales</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 2</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        Passionate about technology and software development. I enjoy
        problem-solving and learning new programming languages.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- Academic Achiever (2024-2026)</Text>
      <Text style={styles.value}>- Consistent Honor Student (2018-2024)</Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- JavaScript</Text>
      <Text style={styles.value}>- React Native</Text>
      <Text style={styles.value}>- Python</Text>
      <Text style={styles.value}>- Web Development</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    lineHeight: 22,
  },
});