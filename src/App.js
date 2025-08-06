import { useState, useEffect } from "react";
import Block from "./Block/Block";
import "./Block/Block.css";

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [count, setCount] = useState(0);

  const makeBlocks = () => {
    const newArray = [];

    for (let i = 0; i < 36; i++) {
      newArray.push({ hasItem: false, id: i, class: "block" });
    }

    newArray[Math.floor(Math.random() * 36) + 1].hasItem = true;
    setBlocks(newArray);
  };

  useEffect(() => {
    makeBlocks();
  }, []);

  const onCheckItem = (id) => {
    setCount((prevCount) => prevCount + 1);
    if (blocks[id].hasItem === true) {
      blocks[id].class = "circle";
      alert("Congratulation!You find circle!");
      setTimeout(() => {
        onResetGame();
      }, 500); 
    } else {
      blocks[id].class = "show";
    }
    setBlocks([...blocks]);
  };

  const onResetGame = () => {
    makeBlocks();
    setCount(0);
  };

  return (
    <div className="container">
      <div className="playgroundBlock">
        {blocks.map((block) => (
          <Block
            key={block.id}
            class={block.class}
            onHeandlerBlock={() => onCheckItem(block.id)}
          />
        ))}
      </div>
      <p className="tries">Tries:{count}</p>
      <div className="playground">
        {" "}
        <button className="resetBtn" onClick={onResetGame}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
