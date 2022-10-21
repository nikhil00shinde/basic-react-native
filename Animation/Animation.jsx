import { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';


const App = () => {
  
 const  Fade = new Animated.Value(0);

 useEffect(()=>{
    Animated.timing(Fade,{
      toValue:1,
      duration:5000,
      useNativeDriver:true
    }).start()
 },[Fade])
  return (
    <Animated.View style={{
      backgroundColor:"#30336b",
      height:100,
      width:100,
      opacity:Fade
      }} >


    </Animated.View>
  );
}
export default App
