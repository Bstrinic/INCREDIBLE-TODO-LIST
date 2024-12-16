import { Text, View } from "react-native";
import React, { Component } from "react";
import { Button, TextInput } from "react-native-web";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState("");
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
};
