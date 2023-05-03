export const RandomQuotes = ({ showQuotes, changeHandler }) => {
  return (
    <>
      <div>
        <div style={{ paddingBottom: "1rem" }}>{showQuotes.content}</div>
        <div>Author :- {showQuotes.author}</div>
      </div>
      <button onClick={changeHandler}>Random Quotes</button>
    </>
  );
};
