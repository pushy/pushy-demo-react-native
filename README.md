# pushy-demo-react-native

A demo of the [Pushy SDK for React Native](https://github.com/pushy/pushy-react-native) integrated into a sample React Native app.

> [Pushy](https://pushy.me/) is the most reliable push notification gateway, perfect for real-time, mission-critical applications.

This app registers your device to receive push notifications and assigns it a unique token, which you can copy and paste into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test push notification on both Android and iOS.

Visit our documentation to [integrate Pushy into your existing React Native app](https://pushy.me/docs/additional-platforms/react-native).

## Screenshots

#### iOS

<img src="src/img/1.png" width="250"> <img src="src/img/2.png" width="250"> 

#### Android

<img src="src/img/3.png" width="250"> <img src="src/img/4.png" width="250">

## Get Started

* Make sure you have an up-to-date version of the React Native CLI installed: `npm install -g react-native-cli`
* Clone the repository locally: `git clone https://github.com/pushy/pushy-demo-react-native.git`
* Run `cd pushy-demo-react-native`
* Run `npm install` to install the React Native dependencies
* For Android, run `npx react-native run-android` to run the app on either an emulator or a connected Android device
* For iOS, open the `ios/Pushy.xcodeproj` in Xcode, select your physical device, update the Signing Team in the project properties, and press **Run** to run the app on your iOS device
* Copy the device token from the Xcode console and paste it into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test notification

## More Information

* [Pushy](https://pushy.me/)
* [Pricing](https://pushy.me/pricing)
* [Documentation](https://pushy.me/docs)

## License

[Apache 2.0](LICENSE)
