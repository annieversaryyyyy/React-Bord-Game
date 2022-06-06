import {useState} from "react";
import Block from "./Block/Block";
import './Block/Block.css';

const App = () => {
    const [blocks, setBlocks] = useState([]);
    const [win, setWin] = useState(false);
    const [count,setCount] = useState(0);

    const makeBlocks = () => {
        const newArray = [];

        for(let i = 0; i < 36; i++) {
            newArray.push({hasItem: false, id: i,class: "block"});
        }

        newArray[Math.floor( Math.random() * 36) + 1].hasItem = true;
        setBlocks(newArray);
    };

    if (blocks.length === 0){
       makeBlocks();
    }

    const onCheckItem = (id) => {
            setCount(count + 1);
            if(blocks[id].hasItem === true) {
                blocks[id].class = "circle"
                alert("Congratulation!You find circle!")
            }else{
                blocks[id].class = "show";
            }
           setBlocks([...blocks]);

    };


    const onResetGame = () => {
        makeBlocks();
        setWin(false);
    };



    return (
      <div className="container" >
          <div className="playgroundBlock">
              {
                  blocks.map(block => (
                      <Block
                          key={block.id}
                          class={block.class}
                          onHeandlerBlock={() => onCheckItem(block.id)}
                      />
                  ))
              }
          </div>
          <p className="tries"  on>Tries:</p>
          <div className="playground"> <button className="resetBtn" onClick={onResetGame}>Reset</button></div>
      </div>
    );
};

export default App;
