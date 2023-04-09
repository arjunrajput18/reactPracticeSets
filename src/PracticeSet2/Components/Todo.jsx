export const TodoItem = ({ todoItems }) => {
  return (
    <>
      {todoItems.map(({ id, title, description, isCompleted }) => (
        <div style={{ color: isCompleted ? "green" : "red" }} key={id}>
          <h2>{title}</h2>
          <p> {description}</p>
        </div>
      ))}
    </>
  );
};
