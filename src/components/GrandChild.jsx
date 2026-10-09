import "../App.css";

export default function GrandChild() {
  const css = {
    color: "blue",
    backgroundColor: "blue",
  };

  return (
    <div style={{ border: "solid blue" }}>
      <h1 style={css}>Grandchild</h1>
    </div>
  );
}
