import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInput = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.isVisible} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={goalInput}
                    value={enteredGoal}/>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={props.onHideModal}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    input: {
        width: '80%',borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row', justifyContent: 'space-between', width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;