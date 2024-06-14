import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

// Define dark and light themes
const darkTheme = {
  backgroundColor: '#333',
  textColor: '#FFF',
};

const lightTheme = {
  backgroundColor: '#FFF',
  textColor: '#333',
};

const App: React.FC = () => {
  // Get the user's preferred color scheme
  const colorScheme = useColorScheme();

  // State to keep track of current theme
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Select the current theme based on state
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Text style={styles.themeButtonText}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.text, { color: theme.textColor }]}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  themeButton: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4287f5',
  },
  themeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App;
