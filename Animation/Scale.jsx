import React, { useEffect } from "react";
import { Animated, Text, View } from 'react-native';

const Scale = () => {

  const Scale = new Animated.Value(0);
  const ScaleValue = Scale.interpolate({
    inputRange:[0,1],
    outputRange:[0.3,1],
  });

  useEffect(()=>{
      Animated.timing(Scale,{
        toValue:1,
        duration:10000,
        useNativeDriver:true
      }).start()
  },[ScaleValue])

  return (
    <Animated.View
      style={{
        backgroundColor:"#30336b",
        height:200,
        width:200,
        transform:[{scale:ScaleValue}]
      }}
    >

    </Animated.View>
  )
}

export default Scale;