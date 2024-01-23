# pushy-demo-react-native

A demo of the [Pushy SDK for React Native](https://github.com/pushy/pushy-react-native) integrated into a sample React Native app.

> [Pushy](https://pushy.me/) is the most reliable platform for time-critical, worldwide push notification delivery.

This app registers your device to receive push notifications and assigns it a unique token, which you can copy and paste into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test push notification on both Android and iOS.

Visit our documentation to [integrate Pushy into your existing React Native app](https://pushy.me/docs/additional-platforms/react-native).

## Screenshots

#### iOS

<img src="src/img/1.png" width="250"> <img src="src/img/2.png" width="250"> 

#### Android

<img src="src/img/3.png" width="250"> <img src="src/img/4.png" width="250">

## Get Started

* First, ensure you have a healthy React Native installation by running `npx react-native@latest doctor` and fixing any issues reported
* Clone the repository locally: `git clone https://github.com/pushy/pushy-demo-react-native.git`
* Run `cd pushy-demo-react-native`
* Run `npm install` to install the React Native dependencies
* For Android, run `npx react-native@latest run-android` to run the app on either an emulator or a connected Android device
* For iOS, run `cd ios && bundle install && bundle exec pod install` to install the CocoaPods dependencies. Then, open `ios/Pushy.xcworkspace` in Xcode, select your physical device, update the Signing Team in the project properties, and press **Run** to run the app on your iOS device
* Copy the device token from the Metro dev server console and paste it into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test notification

## More Information

* [Pushy](https://pushy.me/)
* [Pricing](https://pushy.me/pricing)
* [Documentation](https://pushy.me/docs)

## License

[Apache 2.0](LICENSE)
