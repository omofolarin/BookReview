import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import { SvgProps, SvgXml } from "react-native-svg";

import { NavigationContainer } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import { PlatformPressable } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeIcon = () => {
  return (
    <SvgXml
      xml={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" fill="white"/>
  <path d="M19 21V23H8V21H19ZM24 14V16H6V14H24ZM22 7V9H11V7H22Z" fill="#242424"/>
  </svg>
  `}
    />
  );
};

const SearchIcon = () => {
  return (
    <SvgXml
      xml={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" fill="white"/>
    <path d="M21.031 19.617L25.314 23.899L23.899 25.314L19.617 21.031C18.0237 22.3082 16.042 23.0029 14 23C9.032 23 5 18.968 5 14C5 9.032 9.032 5 14 5C18.968 5 23 9.032 23 14C23.0029 16.042 22.3082 18.0237 21.031 19.617ZM19.025 18.875C20.2941 17.5699 21.0029 15.8204 21 14C21 10.132 17.867 7 14 7C10.132 7 7 10.132 7 14C7 17.867 10.132 21 14 21C15.8204 21.0029 17.5699 20.2941 18.875 19.025L19.025 18.875Z" fill="#242424"/>
    </svg>
    `}
    />
  );
};

const NotificationIcon = () => {
  return (
    <SvgXml
      xml={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" fill="white"/>
    <path d="M23 20H25V22H5V20H7V13C7 10.8783 7.84285 8.84344 9.34315 7.34315C10.8434 5.84285 12.8783 5 15 5C17.1217 5 19.1566 5.84285 20.6569 7.34315C22.1571 8.84344 23 10.8783 23 13V20ZM21 20V13C21 11.4087 20.3679 9.88258 19.2426 8.75736C18.1174 7.63214 16.5913 7 15 7C13.4087 7 11.8826 7.63214 10.7574 8.75736C9.63214 9.88258 9 11.4087 9 13V20H21ZM12 24H18V26H12V24Z" fill="#242424"/>
    </svg>
    `}
    />
  );
};

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <View style={{ paddingHorizontal: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>BookMate</Text>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 8,
              }}
            >
              <PlatformPressable
                style={{ marginRight: 16 }}
                onPress={() => {
                  console.log("pressed search icon");
                }}
              >
                <SearchIcon />
              </PlatformPressable>

              <PlatformPressable
                style={{ marginRight: 8 }}
                onPress={() => {
                  console.log("pressed search icon");
                }}
              >
                <NotificationIcon />
              </PlatformPressable>
            </View>
          ),

          headerLeft: () => (
            <PlatformPressable>
              <HomeIcon />
            </PlatformPressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  const pageView = React.useRef<PagerView>(null);
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "space-around",
        }}
      >
        <PlatformPressable
          style={{
            padding: 8,
            width: "50%",
            borderBottomColor: currentTab === 0 ? "blue" : "transparent",
            borderBottomWidth: 2,
          }}
          onPress={() => {
            pageView.current?.setPage(0);
            setCurrentTab(0);
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Discover</Text>
        </PlatformPressable>

        <PlatformPressable
          style={{
            padding: 8,
            width: "50%",
            borderBottomColor: currentTab === 1 ? "blue" : "transparent",
            borderBottomWidth: 2,
          }}
          onPress={() => {
            pageView.current?.setPage(1);
            setCurrentTab(1);
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Community</Text>
        </PlatformPressable>
      </View>

      <View style={{ flex: 1, top: 0, backgroundColor: "#fff" }}>
        <PagerView
          initialPage={currentTab}
          style={{ flex: 1 }}
          ref={pageView}
          scrollEnabled={false}
        >
          <View style={styles.container} key="1">
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>

          <View style={styles.container} key="2">
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </PagerView>
      </View>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// function HomeTab() {
//   return (
//     <Tab.Navigator initialRouteName="Home">
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
