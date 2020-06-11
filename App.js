import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = goalTitle => {
    // setGoals([...goals, enteredGoal]);
    // setGoals(currentGoals => [...goals, enteredGoal]); // latest state snapshot

    // Flatlist requires the data to be array of objects with key-value pairs
    setGoals(currentGoals => [...goals, { id: Math.random().toString(), value: goalTitle }]); // latest state snapshot
    // console.log((goals.length).toString() + ": " + enteredGoal);
  };

  const deleteGoal = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal}/>

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
        renderItem={itemData => <GoalItem id={itemData.item.id} onDeleteGoal={deleteGoal} goalTitle={itemData.item.value} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
