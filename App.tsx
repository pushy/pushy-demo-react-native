import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StatusBar, StyleSheet, Text, Image, View, Platform} from 'react-native';

// Import Pushy RN JS SDK
import Pushy from 'pushy-react-native';

// Place these lines of code right after the
// import statements in App.tsx as top-level code

Pushy.setNotificationListener(async data => {
  // Print notification payload data
  console.log('Received notification: ' + JSON.stringify(data));

  // Notification title
  let notificationTitle = 'MyApp';

  // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
  let notificationText = data.message || 'Test notification';

  // Android: Displays a system notification
  // iOS: Displays an alert dialog
  Pushy.notify(notificationTitle, notificationText, data);

  // Clear iOS badge count
  Pushy.setBadge(0);
});

// Enable in-app notification banners (iOS 10+)
Pushy.toggleInAppBanner(true);

// Handle notification tap event
Pushy.setNotificationClickListener(async data => {
  // Display basic alert
  alert('Notification click: ' + data.message);

  // Navigate the user to another page or
  // execute other logic on notification click
});

function App(): React.JSX.Element {
  // State
  const [state, setState] = useState({
    tokenDisplay: 'Registering your device...',
    instructions: '(please wait)',
  });

  // Not registered yet?
  if (state.instructions === '(please wait)') {
    // Start the Pushy service
    Pushy.listen();

    // Register the user for push notifications
    Pushy.register()
      .then(async deviceToken => {
        // Update UI
        setState({
          tokenDisplay: deviceToken,
          instructions: '(copy from device logs)',
        });

        // Write device token to device logs
        console.log('Pushy device token: ' + deviceToken);

        // Send the token to your backend server via an HTTP GET request
        //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);

        // Succeeded, optionally do something to alert the user
      })
      .catch(err => {
        // Update UI
        setState({
          tokenDisplay: 'Registration Failed',
          instructions: err.toString(),
        });

        // Handle registration errors
        console.error(err);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.appTitle}>Pushy</Text>
      </View>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        <Image style={styles.logo} source={require('./src/img/ic_logo.png')} />
        <Text style={styles.tokenDisplay}>{state.tokenDisplay}</Text>
        <Text style={styles.instructions}>{state.instructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    justifyContent: 'flex-start',
    backgroundColor: '#252525',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  appTitle: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 13,
    marginLeft: Platform.OS === 'ios' ? 0 : 15,
    marginBottom: 15,
    alignItems: 'center',
    color: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  tokenDisplay: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: Colors.darker,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    color: Colors.dark,
  },
  logo: {
    height: 90,
    resizeMode: 'contain',
  },
});

export default App;
