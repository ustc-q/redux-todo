import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

// 函数组件
const TodoList = ({ todos, onDeleteTodo, onModifyTodo, onToggleTodo }) => (
  <React.Fragment>
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} onDeleteTodo={() => onDeleteTodo(todo.id)}
        onModifyTodo={onModifyTodo} onToggleTodo={() => onToggleTodo(todo.id)} />
    ))}
  </React.Fragment>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onModifyTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
}

export default TodoList