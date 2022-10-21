import { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';


const Spin = () => {
  
 const  Spin = new Animated.Value(0);
 const SpinValue = Spin.interpolate({
  inputRange:[0,1],
  outputRange:["0deg","360deg"]
 })

 useEffect(()=>{
    Animated.timing(Spin,{
      toValue:1,
      duration:5000,
      useNativeDriver:true
    }).start()
 },[Spin])
  return (
    <Animated.View style={{
      backgroundColor:"#30336b",
      height:100,
      width:100,
      transform:[{rotate:SpinValue}]
      }} >


    </Animated.View>
  );
}
export default Spin