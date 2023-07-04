import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text styles={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item : {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  itemLeft : {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'lightblue',
    opacity: 0.4,
    borderRadius: 8,
    marginRight: 16,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 16,
    height: 16,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;