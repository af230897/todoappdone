import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";
class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    if(text==""){

    }
    else{
      this.props.dispatch(addTodo(text));
    this.setState({ text: "" });

    }
    //redux store
      };

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Eg. Create New Video"
            style={{
              borderWidth: 1,
              borderColor: "#f2f2e1",
              backgroundColor: "#eaeaea",
              height: 50,
              flex: 1,
              padding: 5
            }}
          />

          <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
            <View
              style={{
                height: 50,
                backgroundColor: "grey",
                justifyContent: "center"
              }}
            >
              <Text> Add </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
