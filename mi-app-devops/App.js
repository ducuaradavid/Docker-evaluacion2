import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.warningTitle}>⚠️ Sistema en Mantenimiento</Text>
        <Text style={styles.warningText}>
          Estamos realizando mejoras en la plataforma DevOps. Por favor, intenta más tarde.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7f1d1d', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { backgroundColor: '#ffffff', padding: 30, borderRadius: 15, alignItems: 'center', shadowBlur: 10, elevation: 5 },
  warningTitle: { fontSize: 20, fontWeight: 'bold', color: '#b91c1c', marginBottom: 10, textAlign: 'center' },
  warningText: { fontSize: 14, color: '#4b5563', textAlign: 'center' }
});