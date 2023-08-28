import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const [currentValue, setcurrentValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (currentValue !== "") {
      dispatch(addTodo(currentValue));
      setcurrentValue("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.InputField}
        placeholder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setcurrentValue}
        onSubmitEditing={handleSubmit} //엔터키로 서브밋하면
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButton}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: "30",
    paddingHorizontal: "20",
    backgroundColor: "#f7f8fa",
  },
  InputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    padding: 5,
    marginRight: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center", //한줄일때 alignItems, 두줄이면 alignContent
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: "white",
    fontSize: 25,
  },
});
