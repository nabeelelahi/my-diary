import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./button";

export default function Button({ style, textStyle, title }) {

    let buttonStyles;
    let buttonTextStyles;

    if(styles){
        buttonStyles = {...styles.button, ...style}
    }
    else{
        buttonStyles = styles.button
    }
    if(textStyle){
        buttonTextStyles = {...styles.buttonText, ...textStyle}
    }
    else{
        buttonTextStyles = styles.buttonText
    }

  return (
    <View style={buttonStyles}>
      <Text style={buttonTextStyles}>{title}</Text>
    </View>
  );
}