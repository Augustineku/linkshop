import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./Gallery.jsx";

function App() {
  const [count, setCount] = useState(0);
  const images = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
  ];
  return (
    <div>
      <h1>LINK SHOP</h1>
      <input type="text" value="샵 이름으로 겁색해 보세요"></input>
      <Gallery images={images} />
    </div>
  );
}

export default App;
