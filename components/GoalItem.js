import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <TouchableOpacity
        android_ripple={{ color: '#210644' }}
      >
        <Text onPress={props.onDeleteItem.bind(this, props.id)} style={styles.goalText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});