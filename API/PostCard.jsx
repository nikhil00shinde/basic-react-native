import { View, Text,StyleSheet,Image, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function PostCard() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const link = "https://raw.githubusercontent.com/virajj014/userdata/main/mysocialmediapostdata.json";
    fetch(link).then((res)=> res.json()).then(setProducts);
  }, []);

  
  return (
    <SafeAreaView>
    <FlatList
       data={products}
       renderItem={({item}) => (
        <View style={styles.card}>
          <View style={styles.top_card}>
              <Image 
                style={styles.dp}
                source={{uri: item.userprofilepicture}}
              />
              <Text
                style={styles.name_top}
              >{item.username}</Text>
          </View>
          <Image
            style={styles.full_dp}
            source={{uri: item.userpost}}
          />
          <View style={styles.card_text}>
            <Text>Heart</Text>
            <Text style={{paddingLeft:10}}>Comment</Text>
          </View>

          <Text style={styles.bt_card}>
              <Text style={styles.name_top}>
                {item.username}
              </Text>
              <Text></Text>
              <Text style={{paddingLeft:10}}>{item.userpostdescription}</Text>
          </Text>
      </View>
       )}
       keyExtractor={item => item.id}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   card:{
    width:"95%",
    borderColor:"#334",
    height:550,
    borderWidth:1,
    margin:10,
    borderRadius:20,
    marginTop:30
   },
   top_card:{
    backgroundColor:"gray",
    height:60, 
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    flex:0,
    flexDirection:"row",
    alignItems:"center",
    borderColor:"#334",
    padding:20
   },
   dp:{
    width:30,
    aspectRatio:1,
    resizeMode:"cover",
    borderRadius:30
   },
   name_top:{
     paddingLeft:10,
     fontWeight:"900",
   },
   full_dp:{
    resizeMode:"cover",
    width:"100%",
    aspectRatio:1,
   },
   card_text:{
    fontSize:18,
    flex:0,
    flexDirection:"row",
    padding:10
   },
   bt_card:{
    paddingVertical:20,
    paddingHorizontal:10
   }

})