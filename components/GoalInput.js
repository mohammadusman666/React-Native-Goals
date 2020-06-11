import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // function goalInputHandler(enteredtext) {
    //   setEnteredGoal(enteredtext);
    // }

    const goalInput = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    
    return (
        // flexDirection: to place components side by side
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course Goal'
                style={styles.input}
                onChangeText={goalInput}
                value={enteredGoal}/>

            <Button title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    input: {
      width: '80%',borderColor: 'black', borderWidth: 1, padding: 10
    }
  });

export default GoalInput;