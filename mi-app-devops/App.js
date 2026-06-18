import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});