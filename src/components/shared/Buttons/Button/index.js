import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import colors from '~/constants/colors'
import { styles } from "./button";

export default function Button({ style, textStyle, title, isLoading }) {

  let buttonStyles;
  let buttonTextStyles;

  if (styles) {
    buttonStyles = { ...styles.button, ...style }
  }
  else {
    buttonStyles = styles.button
  }
  if (textStyle) {
    buttonTextStyles = { ...styles.buttonText, ...textStyle }
  }
  else {
    buttonTextStyles = styles.buttonText
  }

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    )
  }
  else {
    return (
      <View style={buttonStyles}>
        <Text style={buttonTextStyles}>{title}</Text>
      </View>
    )
  }
}