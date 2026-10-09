import "animate.css";
import "./App.css";
import Parent from "./components/Parent";
import Grid from "./components/Grid/Grid";
export default function App() {
  return (
    <div>
      <h1>app</h1>
      <Parent />
      <button class="bg-blue-500 hover:bg-amber-800 text-white">
        hover me
      </button>

      <Grid>
        <p>en</p>
        <p>to</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
      </Grid>
    </div>
  );
}
