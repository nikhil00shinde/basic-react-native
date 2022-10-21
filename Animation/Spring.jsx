import React, { useEffect } from 'react';
import {Animated, View} from "react-native";


const Spring = () => {

  const Spring = new Animated.Value(0);
 
  useEffect(()=>{
    Animated.spring(Spring,{
      toValue:1,
      friction:5,
      useNativeDriver:true
    }).start()
  },[Spring])

  return (
    <Animated.View
      style={{
        backgroundColor:"#30333b",
        height:200,
        width:200,
        transform:[{scale:Spring}]
      }}
    >

    </Animated.View>
  )

}


export default Spring;