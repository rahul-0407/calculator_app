import React, { useContext, useState } from "react";
import { StyleSheet, Switch, Text, View ,Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import themeContext from "../context/ThemeContext";
import Btn from "./Btn";


const Home = () => {
  const context = useContext(themeContext);
  const { theme, setTheme, getColor,result, value} = context;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  


  return (
    <>

      <StatusBar
        backgroundColor="transparent"
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        translucent={true}
      /> 
      
      <View style={[styles.container,{ backgroundColor: "white" ,width:"100%"},]}>

      <LinearGradient
        colors={theme==='light'?['#e3e9ef', '#d1dae5']:['#0b2c3e', '#081e31']}
        style={styles.topView}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ width: "100%"}}>
          <Text style={{fontSize:30,fontWeight:'700',textAlign:"center",top:20,color:getColor()}}>Calculator</Text>
        <Switch
          style={{ textAlign: "right",top:-20}}
          onValueChange={toggleTheme}
          value={theme === "dark"}
          trackColor={{ true: "white", false: "black" }}
          thumbColor={getColor()}
        />
        </View>
        <Text style={{fontSize:25,fontWeight:'700',color:"grey", textAlign: "right",width: "100%",marginTop:110}}>{result}</Text>
        <Text style={{ fontSize: 50,fontWeight:'700', color: getColor(), textAlign: "right", width: "100%",paddingBottom:20}}>{value}</Text>
      </LinearGradient>

      <LinearGradient
      colors={theme==='light'?["#D3D3D3","#d1dae5"]:["grey","#081e31"]}
      style={{height:".5%",backgroundColor:"red",width:"100%"}}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      >
      </LinearGradient>
        
        
      <LinearGradient
      // colors={['#ffffff', '#e3e9ef']}
      colors={theme==='light'?['#ffffff', '#e3e9ef']:['#0c3449', '#0b2741']}
      style={styles.bottomView}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
        <View style={styles.buttonContainer}>
          <Btn title="C" type="clear"/>
          <Btn title="()" type="side"/>
          <Btn title="%" type="side"/>
          <Btn title="/" type="side"/>
          <Btn title="1" type="number"/>
          <Btn title="2" type="number"/>
          <Btn title="3" type="number"/>
          <Btn title="*" type="side"/>
          <Btn title="4" type="number"/>
          <Btn title="5" type="number"/>
          <Btn title="6" type="number"/>
          <Btn title="+" type="side"/>
          <Btn title="7" type="number"/>
          <Btn title="8" type="number"/>
          <Btn title="9" type="number"/>
          <Btn title="-" type="side"/>
          <Btn title="0" type="number"/>
          <Btn title="." type="number"/>
          <Btn title="⌫" type="delete"/>
          <Btn title="=" type="equal"/>
        </View>
      </LinearGradient>

        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  topView:{
    height:"36.5%",
    width:"100%",
    backgroundColor:"red",
    padding:26,
  },
  bottomView:{ 
    height:"63%",
    width:"100%",
    backgroundColor:"yellow"
  },
  buttonContainer:{
    padding:10,
    flexDirection: "row",
    flexWrap: "wrap" ,
    justifyContent:"center",
    alignContent:"center",
    flex:1,
    marginBottom:"7%",
    
  }
});

export default Home;
