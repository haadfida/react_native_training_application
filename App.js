import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setIsAddMode(true);
  };

<<<<<<< HEAD
  const addGoalHandler = (enteredGoalText) => {
    if(!enteredGoalText){
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: enteredGoalText + Math.random().toString() },
    ]);
    cancelGoalAdditionHandler();
=======
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
>>>>>>> 34b81c2006ecc59869e4d00581b068814a44a8be
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
<<<<<<< HEAD
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddGoalHandler} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
=======
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
>>>>>>> 34b81c2006ecc59869e4d00581b068814a44a8be
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
