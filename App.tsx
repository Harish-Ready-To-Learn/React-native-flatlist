import React , {useState} from "react";
import {View , Text , StyleSheet , FlatList , Image , Button} from "react-native";

const App = () =>{
  const[images,seimages]=useState([
    {source:require('./assets/1.jpg'),name:'Harish',id:'1'},
    {source:require('./assets/2.jpeg'),name:'Harsha',id:'2'},
    {source:require('./assets/3.jpg'),name:'Harath',id:'3'},
    {source:require('./assets/4.jpg'),name:'HariVignesh',id:'4'},
    {source:require('./assets/5.jpg'),name:'RamVikram',id:'5'},
    {source:require('./assets/6.jpg'),name:'Nadeer',id:'6'},
    {source:require('./assets/7.jpg'),name:'Deepak',id:'7'},
    {source:require('./assets/8.jpg'),name:'Jeevan',id:'8'},
    {source:require('./assets/1.jpg'),name:'Kavin',id:'9'},
    {source:require('./assets/1.jpg'),name:'Navin',id:'10'},
    {source:require('./assets/1.jpg'),name:'Krishna',id:'11'},
    {source:require('./assets/1.jpg'),name:'Thanveer',id:'12'},
    {source:require('./assets/1.jpg'),name:'Prasanth',id:'13'},
    {source:require('./assets/1.jpg'),name:'SriHari',id:'14'},
  ]);
  return(
    <View style={{backgroundColor:"cyan" , flex:1,padding:25}}>
    <FlatList 
    keyExtractor={(item) => item.id}
    data={images}
    renderItem={({item})=>(
      <View style={{flexDirection:'row' , backgroundColor:'black',borderRadius:20,width:'100%',height:80,marginTop:5}}> 
      <Image source={item.source}
        style={{
          width: 50,
          height: 50,
          borderRadius: 80 / 2,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "black",
          margin: 15
        }} />
        <Text style={{padding:5,fontSize:30,marginLeft:45, color:'white',marginTop:10}}>{item.name}</Text>
        
        </View>
    )}/>

    </View>
  );
}



export default App;