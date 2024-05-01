/** @format */

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

  useEffect(() => {
    async function prepare() {
      try {
        getFonts();
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  if (fontsLoaded) {
    return <Redirect href={"/Splash"} />;
  } else {
    return null;
  }
}
