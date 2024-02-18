import React, { useContext } from "react";
import { StyleSheet,TouchableOpacity, Text, View } from "react-native";
import themeContext from "../context/ThemeContext";




const Btn = ({title,type}) => {
  const context = useContext(themeContext);
  const { theme,getColor,result, setResult,updateValue } = context;

  const btnColor = () => {
    if(type==="side"){
      return '#50c3b6'
    }
    else if(type==="clear"){
      return '#eb6b6b'
    }
    else if(type==="equal"){
      return '#ffffff'
    }
    else{
      return getColor()
    }
  }

  const calculate = (title) => {
    // const res = Number(eval(result).toFixed(7)).toString()
    // setValue(eval(result))
    

    if(title==='C'){
      setResult('')
      updateValue("")
    }
    else if(title==='⌫'){
      let res=result.slice(0,-1)
      setResult(res)
      // setResult(result.subString(result.length-1))
    }
    else if(title==="="){
      const res = Number(eval(result).toFixed(7)).toString()
      setResult(res)
    }
    else{
      setResult(result+title)

      if(type==='number'){
        const val = eval(result+title).toString()
        updateValue(val)
      }

      // const val = eval(result+title).toString()
      // updateValue(val)

    }
  }
  

  return (
    <TouchableOpacity 
    onPress={()=> calculate(title,type)}
    style={[styles.btn,type !== "equal" && { backgroundColor: "transparent" },type === "equal" && { backgroundColor: "#2d9b9d" }]}>
      <Text style={[styles.btnText,{color:btnColor(),fontFamily: 'Arial-Unicode'}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn:{
    borderRadius:35,
    width:"25%",
    height:"20%",
    alignItems:"center",
    justifyContent:"center",
  },
  btnText:{
    fontSize:37,
  }
})

export default Btn
