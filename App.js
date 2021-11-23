/**
 * Pushy Demo for React Native
 * https://github.com/pushy-me/pushy-demo-react-native
 *
 * Refer to our docs:
 * https://pushy.me/docs/additional-platforms/react-native
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, View, StatusBar } from 'react-native';

// Import Pushy RN JS SDK
import Pushy from 'pushy-react-native';

// Enable in-app notification banners (iOS 10+)
Pushy.toggleInAppBanner(true);

// Pushy Notification Listener (HeadlessJS)
// Invoked even if your app is in the background
Pushy.setNotificationListener(async (data) => {
  // Print notification payload data
  console.log('Received notification: ' + JSON.stringify(data));

  // Notification title
  let notificationTitle = 'Pushy';

  // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
  let notificationText = data.message || 'Test notification';

  // Display basic system notification
  Pushy.notify(notificationTitle, notificationText, data);
});

// Pushy Notification Click Listener
Pushy.setNotificationClickListener(async (data) => {
  // Display basic alert
  alert('Clicked notification: ' + data.message);

  // Navigate the user to another page or 
  // execute other logic on notification click
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    // Default UI loading text
    this.state = { tokenDisplay: 'Registering your device...', instructions: '(please wait)' };
  }

  componentDidMount() {
    // Start the Pushy service
    Pushy.listen();

    // Register the device for push notifications
    Pushy.register().then(async (deviceToken) => {
      // Update UI
      this.setState({ tokenDisplay: deviceToken, instructions: '(copy from device logs)' });

      // Write device token to device logs
      console.log('Pushy device token: ' + deviceToken);

      // Send the token to your backend server via an HTTP GET request
      //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);

      // Succeeded, optionally do something to alert the user
    }).catch((err) => {
      // Update UI
      this.setState({ tokenDisplay: 'Error', instructions: err.toString() });

      // Handle registration errors
      console.error(err);
    });

    // Android-only code
    if (Platform.OS === 'android') {
      // Set system status bar color
      StatusBar.setBackgroundColor('#000000');
    }

    // Light system status bar text
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.appTitle}>Pushy</Text>
        </View>
        <View style={styles.content}>
          <Image style={styles.logo} source={require('./src/img/ic_logo.png')} />
          <Text style={styles.tokenDisplay}>{this.state.tokenDisplay}</Text>
          <Text style={styles.instructions}>{this.state.instructions}</Text>
        </View>
      </View>
    );
  }
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbar: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#252525'
  },
  appTitle: {
    fontSize: 20,
    marginTop: 13,
    marginLeft: 15,
    marginBottom: 15,
    color: '#ffffff'
  },
  tokenDisplay: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5
  },
  logo: {
    height: 90,
    resizeMode: 'contain'
  }
};

// iOS-only navbar styling
if (Platform.OS === 'ios') {
  styles.appTitle.fontSize = 23;
  styles.appTitle.marginLeft = 0;
  styles.appTitle.marginTop = 30;
  styles.navbar.alignItems = 'center';
}

styles = StyleSheet.create(styles);