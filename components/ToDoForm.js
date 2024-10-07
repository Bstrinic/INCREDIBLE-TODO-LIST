
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button, TextInput } from 'react-native-web'


const ToDoForm = () => {
    return(
        <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
      </View>
    );
}


