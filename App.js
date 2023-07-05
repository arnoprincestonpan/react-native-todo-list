import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import tasksData from './data/MyTasks.json';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    setTaskItems(tasksData)
  }, [])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);
  }

  return ( 
    <View style={styles.container}>
    {/* Current Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        
        <View style={styles.items}>
          {/* Tasks Go Here */}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />

                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : 'height'} 
        style={styles.writeTaskWrapper}
      >

        <TextInput style={styles.input} placeholder={'Write a task.'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 24
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 64,
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: 240,
  },
  writeTaskWrapper : {
    position: 'absolute',
    bottom: 45,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addWrapper : {
    width: 56,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  addText : {

  }
});
