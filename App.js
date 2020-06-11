import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoal = goalTitle => {
    setGoals(currentGoals => [...goals, { id: Math.random().toString(), value: goalTitle }]); // latest state snapshot    
    setIsModalOpen(false);
  };

  const deleteGoal = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalOpen(true)} />

      <GoalInput isVisible={isModalOpen} onAddGoal={addGoal} onHideModal={hideModal} />

      <FlatList
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
