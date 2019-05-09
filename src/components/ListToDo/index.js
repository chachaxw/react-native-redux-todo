import PropTypes from 'prop-types';
import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';

import List from './List';
import iconCheck from '../../icons/check.png';
import iconUncheck from '../../icons/uncheck.png';
import iconStar from '../../icons/star.png';
import iconUnStar from '../../icons/unstar.png';
import iconDelete from '../../icons/remove.png';

const ToDoList = props => {
  const { todos, actions, visibilityFilter } = props;

  const getVisibleTodos = (allTodos, whatFilter) => {
    switch(whatFilter) {
      case 'SHOW_ALL':
        return allTodos;
      case 'SHOW_COMPLETED':
        return allTodos.filter(
          t => t.isDone
        );
      case 'SHOW_ACTIVE':
        return allTodos.filter(
          t => !t.isDone
        );
      case 'SHOW_FAVORITE':
        return allTodos.filter(
          t => t.isStarred
        );
    }
  };

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  const _leftOnPress = id => event => actions.toggleTodo(id);
  const _rightOnPress = id => event => actions.toggleStarTodo(id);
  const _onDelete = id => (event) => actions.removeTodo(id);
  const _textOnPress = (id, text) => event => {
    actions.toggleEditTodo(id);
    Actions.editScreen({
      type: ActionConst.PUSH,
      id,
      text,
    });
  }

  return (
    <View style={styles.container}>
      <List
        visibleTodos={visibleTodos}
        leftOnPress={_leftOnPress}
        leftUnactiveIcon={iconUncheck}
        leftActiveIcon={iconCheck}
        rightOnPress={_rightOnPress}
        rightUnactiveIcon={iconUnStar}
        rightActiveIcon={iconStar}
        textOnPress={_textOnPress}
        onDelete={_onDelete}
        iconDelete={iconDelete}
        {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});

ToDoList.propTypes = {
  style: PropTypes.number,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default ToDoList;