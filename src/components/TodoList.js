import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo, allTodos, visibilityFilter }) => {
  console.log("hjgj===", visibilityFilter.text);

  const getVisibleTodos = todos => {
    switch (visibilityFilter.text) {
      case "allTodos":
        return todos;
      case "completedTodos":
        return todos.filter(todo => todo.completed);
      case "incompletedTodos":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };
  const visibleTodos = getVisibleTodos(todos);

  return (
    <View>
      <View style={{ padding: 20 }}>
        {visibleTodos.map(todo => (
          <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        {/* <Text>//{visibilityFilter.text}//</Text> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "space-between",
          marginTop: 10
        }}
      >
        <Text style={{ alignItems: "center", marginTop: 10, fontSize: 20 }}>
          Filter options :
        </Text>
        <TouchableOpacity onPress={() => allTodos("allTodos")}>
          <View
            style={{
              height: 50,
              backgroundColor: "lightgrey",
              justifyContent: "center"
            }}
          >
            <Text> ALL </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => allTodos("completedTodos")}>
          <View
            style={{
              height: 50,
              backgroundColor: "lightgrey",
              justifyContent: "center"
            }}
          >
            <Text> Completed </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => allTodos("incompletedTodos")}>
          <View
            style={{
              height: 50,
              backgroundColor: "lightgrey",
              justifyContent: "center"
            }}
          >
            <Text> Incompleted </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
