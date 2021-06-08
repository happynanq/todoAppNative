import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Content } from "./src/Content/Content";
import { Navbar } from "./src/Navbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Navbar />
        <View style={styles.content}>
          <Content />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    flex:1
   
  },
  
  content:{
    alignItems:"flex-start",
    // backgroundColor:"#000",
    width:"100%",
    marginTop:10,
    paddingHorizontal:10
  }
})

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  
});