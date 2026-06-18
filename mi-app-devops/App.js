<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> main

export default function App() {
  const [datosApi, setDatosApi] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Misión 2: Consumir una API Pública (JSONPlaceholder - Lista de Usuarios)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setDatosApi(json);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error consumiendo la API:", error);
        setCargando(false);
      });
  }, []);

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Evidencia DevOps y QA</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Lista de Usuarios (Desde API Pública)</Text>
        
        {cargando ? (
          <ActivityIndicator size="large" color="#1e3a8a" style={{ marginTop: 20 }} />
        ) : (
          /* Renderizado de la lista que viene desde la API */
          <FlatList
            data={datosApi}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardSub}>📧 {item.email}</Text>
                <Text style={styles.cardSub}>🏢 {item.company.name}</Text>
              </View>
            )}
          />
        )}
=======
      <View style={styles.card}>
        <Text style={styles.warningTitle}>⚠️ Sistema en Mantenimiento</Text>
        <Text style={styles.warningText}>
          Estamos realizando mejoras en la plataforma DevOps. Por favor, intenta más tarde.
        </Text>
>>>>>>> main
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, backgroundColor: '#f8fafc', paddingTop: 40 },
  header: { backgroundColor: '#1e3a8a', padding: 20, alignItems: 'center' },
  headerTitle: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#0f172a' },
  card: { 
    backgroundColor: '#ffffff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  cardName: { fontSize: 15, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#64748b', marginTop: 2 }
=======
  container: { flex: 1, backgroundColor: '#7f1d1d', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { backgroundColor: '#ffffff', padding: 30, borderRadius: 15, alignItems: 'center', shadowBlur: 10, elevation: 5 },
  warningTitle: { fontSize: 20, fontWeight: 'bold', color: '#b91c1c', marginBottom: 10, textAlign: 'center' },
  warningText: { fontSize: 14, color: '#4b5563', textAlign: 'center' }
>>>>>>> main
});