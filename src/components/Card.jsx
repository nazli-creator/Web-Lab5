function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
