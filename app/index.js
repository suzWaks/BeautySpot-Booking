import { Link, Redirect } from "expo-router";
import * as Font from "expo-font";
import { FONTS } from "../app/utils/theme.js";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";


const getFonts = () => {
  return Font.loadAsync({
    [FONTS.regular]: require("../assets/fonts/Lora Regular.ttf"),
    [FONTS.medium]: require("../assets/fonts/Lora-Medium.ttf"),
    [FONTS.semiBold]: require("../assets/fonts/Lora-SemiBold.ttf"),
    [FONTS.bold]: require("../assets/fonts/Lora-Bold.ttf"),
  });
};

SplashScreen.preventAutoHideAsync();

export default function Page() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts(); // Wait for fonts to load
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  // Check if fonts are loaded and redirect accordingly
  if (fontsLoaded) {
    if (loggedIn) {
      return <Redirect href={"/Home"} />;
    } else {
      return <Redirect href={"/Splash"} />;
    }
  } else {
    return null;
  }
}
