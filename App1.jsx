import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const App = () => {
  
  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "djjdj",
       [ {
          text: "Ask me later cool",
         
        }]);

  return (
    <View style={styles.container} >
    <Button
    onPress={createThreeButtonAlert}
    title="Press Mw"
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   margin:20
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default App

// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function App() {

//   const Data = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];
//   const [data,setData] = useState(Data)
//   const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   console.log("second,jjd")
//   return (
//     <View style={styles.container}>
//       <FlatList
//       keyExtractor={(item) => item.id}
//         data={data}
//         renderItem={({item}) => (
//           <TouchableOpacity>
//             <Text style={styles.item}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       >
//       </FlatList>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 25,
//     marginHorizontal: 10,
//     fontSize: 32,
//   },
  
// })
