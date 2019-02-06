import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import {
  toggleTodo,
  allTodos,
  incompletedTodos,
  completedTodos
} from "../actions";
const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  allTodos: text => dispatch(allTodos(text)),
  completedTodos: text => dispatch(completedTodos(text)),
  incompletedTodos: text => dispatch(incompletedTodos(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
