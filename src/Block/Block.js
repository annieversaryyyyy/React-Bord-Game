import React from 'react';
import "./Block.css";

const Block = (props) => {
   return (
       <div className={props.class} onClick={props.onHeandlerBlock}></div>
   );
};

export default Block;