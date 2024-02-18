import {  Text, View } from "react-native";
import ThemeState from "./src/context/ThemeState";
import React, { useState } from "react";
import Home from "./src/components/Home";
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';


// const fetchFonts = async () => {
//   return Font.loadAsync({
//     'Arial-Unicode': require('./assets/fonts/Arial-unicode-ms.ttf'),
//   });
// };


export default function App() {

  let [fontsLoaded] = useFonts({
    'Arial-Unicode': require('./assets/fonts/Arial-unicode-ms.ttf'),
  });

  if (!fontsLoaded) {
    // Font is not loaded yet
    return <View><Text>Loading...</Text></View>;
  }

  // const [dataLoaded, setDataLoaded] = useState(false);

  // const handleFontsLoaded = () => {
  //   setDataLoaded(true);
  // };

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={handleFontsLoaded}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <ThemeState>
      <Home/>
    </ThemeState>
  );
}

