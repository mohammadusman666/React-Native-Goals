import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  // function goalInputHandler(enteredtext) {
  //   setEnteredGoal(enteredtext);
  // }

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    // setGoals([...goals, enteredGoal]);
    // setGoals(currentGoals => [...goals, enteredGoal]); // latest state snapshot

    // Flatlist requires the data to be array of objects with key-value pairs
    setGoals(currentGoals => [...goals, { key: (goals.length).toString(), value: enteredGoal }]); // latest state snapshot
    // console.log((goals.length).toString() + ": " + enteredGoal);
  }

  return (
    <View style={styles.screen}>
      {/* flexDirection: to place components side by side */}
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInput} value={enteredGoal}/>
        <Button title='Add' onPress={addGoal}/>
      </View>
      {/* <ScrollView>
        {goals.map((goal) => {
          return (
            <Text key={goal}>{goal}</Text>
          );
        })}
        {goals.map((goal) => <View key={goal} style={styles.listItem}>
                                <Text>
                                  {goal}
                                </Text>
                              </View>)}
      </ScrollView> */}

      <FlatList
        // keyExtractor={(item, index) => item.id} // this would tell which field is the key in the object, if you don't write 'key'
        data={goals}
        renderItem={itemData => <View style={styles.listItem}>
                                  <Text>
                                    {itemData.item.value}
                                  </Text>
                                </View>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: {
    width: '80%',borderColor: 'black', borderWidth: 1, padding: 10
  },
  listItem: {
    marginVertical: 10, padding: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1
  }
});
