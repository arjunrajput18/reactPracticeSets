export const Expensive = ({ flowers }) => {
  return (
    <>
      {flowers.map((data) => (
        <li key={data}>{data}</li>
      ))}
    </>
  );
};
