/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-datepicker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from 'moment';

const App: () => React$Node = () => {

  const [getDate, setGetDate] = useState(new Date());
  const [calculatedDate, setCalculatedDate] = useState(moment(moment(getDate, "DD-MM-YYYY").add(89, 'days')._d).format("DD MMM  YYYY dddd"));
  const [numberOfDays, setNumberOfDays] = useState(89);

  const calculateDate = (data)=>{
    console.log(numberOfDays , getDate , moment().add(2, 'days').calendar())
    setGetDate(data.split(" ")[0])
    setCalculatedDate(moment(moment(data.split(" ")[0], "DD-MM-YYYY").add(numberOfDays, 'days')._d).format("DD MMM  YYYY dddd"))  
  }
  const  calculateDate2 = (e)=>{ 
    console.log(e)
    if(e==""){
      setCalculatedDate(moment(moment(getDate, "DD-MM-YYYY").add(89, 'days')._d).format("DD MMM  YYYY dddd"))  
      setNumberOfDays(89)
    }
    else if(e<0){
      setCalculatedDate(moment(moment(getDate, "DD-MM-YYYY").add(++e, 'days')._d).format("DD MMM  YYYY dddd"))
      setNumberOfDays(e)

    }
    else if(e==0){
      setCalculatedDate(moment(moment(getDate, "DD-MM-YYYY").add(e, 'days')._d).format("DD MMM  YYYY dddd"))
      setNumberOfDays(e)

    } else{
      setCalculatedDate(moment(moment(getDate, "DD-MM-YYYY").add(e-1, 'days')._d).format("DD MMM  YYYY dddd"))
      setNumberOfDays(e-1)

    }
   
  }
  return (
    <>
    <ScrollView style={{backgroundColor:"lightblue"}}>
      <View style={{height:hp("10%") ,backgroundColor:"teal",display:"flex" , flexDirection:"row" , justifyContent:"space-evenly", alignContent:"center", alignItems:"center"}}><Text style={{ fontSize:50,textAlign:"center" , fontWeight:"bold",  color:"white"}}>Days Counter</Text></View>
      
    <View  style={{ height: hp("25%"), display:"flex" , flexDirection:"row" , justifyContent:"space-evenly", alignContent:"center", alignItems:"center"}}>
     <DatePicker
        style={{width: 200 ,}}
        date={getDate}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-1000"
        maxDate="01-12-3000"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={date => {calculateDate(date)}}
        />

     <View><Text style={{  fontSize:20 }} >Days: </Text></View>
      <TextInput
        keyboardType='numeric'
      style={{ height: 40, width:50, borderColor: 'gray', borderWidth: 1  , fontSize:19 }}
      onChangeText={e =>    calculateDate2(e)}
      value={20}
      defaultValue={89}
      placeholder='90'
    />
     </View  >

     <View style={{height: hp("50%") , }} >
      <Text style={{fontSize:50 , textAlign:'center', color:"teal" , fontWeight:"bold" ,  } } >{calculatedDate}</Text>
     </View>

      <Text style={{fontSize:20,textAlign:'center', color:"teal" } } >Developed by</Text>
      <Text style={{fontSize:20,textAlign:'center', color:"teal" } } >Muhammad Naeem Arif</Text>
      <Text style={{fontSize:20,textAlign:'center', color:"teal" } } >& Faisal Nazir Basra</Text>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
