/** @format */
import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
function ServiceIconList2({ type, allService }) {
  const serviceIconList = [
    {
      id: 1,
      source: require("../../assets/femaleicons/threading.png"),
      type: "female",
      name: "Threading",
    },
    {
      id: 2,
      source: require("../../assets/femaleicons/haircut.png"),
      type: "female",
      name: "Haircut",
    },
    {
      id: 3,
      source: require("../../assets/femaleicons/facial.png"),
      type: "female",
      name: "Facial",
    },
    {
      id: 4,
      source: require("../../assets/femaleicons/hairstyling.png"),
      type: "female",
      name: "Hair Stylinh",
    },
    {
      id: 5,
      source: require("../../assets/femaleicons/haircoloring.png"),
      type: "female",
      name: "Hair Coloring",
    },
    {
      id: 6,
      source: require("../../assets/femaleicons/hairtreatment.png"),
      type: "female",
      name: "Hair Treatment",
    },
    {
      id: 7,
      source: require("../../assets/femaleicons/bleach.png"),
      type: "female",
      name: "Bleach",
    },
    {
      id: 8,
      source: require("../../assets/femaleicons/waxing.png"),
      type: "female",
      name: "Waxing",
    },
    {
      id: 9,
      source: require("../../assets/femaleicons/hairmassage.png"),
      type: "female",
      name: "Hair Massage",
    },
    {
      id: 10,
      source: require("../../assets/maleicons/facialhair.png"),
      type: "male",
      name: "Facial Hair",
    },
    {
      id: 11,
      source: require("../../assets/maleicons/haircolor.png"),
      type: "male",
      name: "Hair Color",
    },
    {
      id: 12,
      source: require("../../assets/maleicons/haircut.png"),
      type: "male",
      name: "Hair Cut",
    },
  ];
  if (type === "male") {
    return (
      <View style={style.Container}>
        {allService
          ? serviceIconList &&
            serviceIconList
              .filter((serviceIcon) => serviceIcon.type === "male")
              .map((serviceIcon) => (
                <View key={serviceIcon.id} style={style.IconContainer}>
                  <TouchableOpacity style={style.Icon}>
                    <Image
                      source={serviceIcon.source}
                      style={style.IconImage}
                    />
                  </TouchableOpacity>
                  <View style={style.textContainer}>
                    <Text style={style.Text}>{serviceIcon.name}</Text>
                  </View>
                  {/* <Text style={style.Text}>{serviceIcon.name}</Text> */}
                </View>
              ))
          : serviceIconList &&
            serviceIconList
              .filter((serviceIcon) => serviceIcon.type === "male")
              .slice(0, 8)
              .map((serviceIcon) => (
                <View key={serviceIcon.id} style={style.IconContainer}>
                  <TouchableOpacity style={style.Icon}>
                    <Image
                      source={serviceIcon.source}
                      style={style.IconImage}
                    />
                  </TouchableOpacity>
                  <View style={style.textContainer}>
                    <Text style={style.Text}>{serviceIcon.name}</Text>
                  </View>
                  {/* <Text style={style.Text}>{serviceIcon.name}</Text> */}
                </View>
              ))}
      </View>
    );
  }
  if (type === "female") {
    return (
      <View style={style.Container}>
        {allService
          ? serviceIconList &&
            serviceIconList
              .filter((serviceIcon) => serviceIcon.type === "female")
              .map((serviceIcon) => (
                <View key={serviceIcon.id} style={style.IconContainer}>
                  <TouchableOpacity style={style.Icon}>
                    <Image
                      source={serviceIcon.source}
                      style={style.IconImage}
                    />
                  </TouchableOpacity>
                  <View style={style.textContainer}>
                    <Text style={style.Text}>{serviceIcon.name}</Text>
                  </View>
                  {/* <Text style={style.Text}>{serviceIcon.name}</Text> */}
                </View>
              ))
          : serviceIconList &&
            serviceIconList
              .filter((serviceIcon) => serviceIcon.type === "female")
              .slice(0, 8)
              .map((serviceIcon) => (
                <View key={serviceIcon.id} style={style.IconContainer}>
                  <TouchableOpacity style={style.Icon}>
                    <Image
                      source={serviceIcon.source}
                      style={style.IconImage}
                    />
                  </TouchableOpacity>
                  <View style={style.textContainer}>
                    <Text style={style.Text}>{serviceIcon.name}</Text>
                  </View>
                  {/* <Text style={style.Text}>{serviceIcon.name}</Text> */}
                </View>
              ))}
        {/*  */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  IconContainer: {
    width: 80,
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    overflow: "hidden",
  },
  Icon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    borderRadius: 10,
  },
  IconImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 13,
    textAlign: "center",
  },
});
export default ServiceIconList2;
