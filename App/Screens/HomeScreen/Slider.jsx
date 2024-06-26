import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Slider() {

    const [slider,setSlider]=useState();
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders)
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
      data={slider}
      horizontal={true}
      renderItem={({item,index})=>(
      <View>
        <Image source={{uri:item?.image?.url}} 
      style={styles.sliderImage} 
      />
      </View>
      )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    heading: {
        marginBottom:10,
        fontSize:20,
        fontFamily:'outfit-medium',
    },
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:'contain'
    }
})