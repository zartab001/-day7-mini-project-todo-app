function TodoCount({ todos }) {
  const remaining = todos.filter(todo => !todo.completed).length;

  return <p>{remaining} tasks remaining</p>;
}

export default TodoCount;
