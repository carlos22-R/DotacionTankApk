import { Image, StyleSheet, Platform, Text ,View, TextInput,Button, Alert} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Vista } from '@/components/Vista';
import { Pantalla } from '@/components/Pantalla';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    Alert.alert('Formulario enviado', `Nombre: ${name}\nCorreo electrónico: ${email}`);
    // Aquí podrías enviar los datos a un servidor o realizar otras acciones
  };
  // function HomeScreen2() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Home Screen</Text>
  //     </View>
  //   );
  // }
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen2} />
       
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
    <Text style={styles.label}>Nombre:</Text>
    <TextInput
      style={styles.input}
      placeholder="Ingresa tu nombre"
      value={name}
      onChangeText={setName}
    />
    <Text style={styles.label}>Correo electrónico:</Text>
    <TextInput
      style={styles.input}
      placeholder="Ingresa tu correo electrónico"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />
    <Button title="Enviar" onPress={handleSubmit} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  padding: 16,
},
label: {
  fontSize: 16,
  marginBottom: 8,
},
input: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 8,
},
});
