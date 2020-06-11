import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>
                    {props.goalTitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10, padding: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1
    }
});

export default GoalItem;