import React from "react";
import ProduceItem from './ProduceItem';
import availableProduce from './ProduceData';


function Produce (){

  return (
    <div>
      <h2>Produce Schedule</h2>
      <div className="produce-container">
      {availableProduce.map((produceItem, index) =>
        <ProduceItem month={produceItem.month}
          selection={produceItem.selection}
          key={index}/>
      )}
      </div>
      <style jsx>{`
          .produce-container{
            background-color: #EDECEB;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-flow: dense;
            max-width: 1000px;
            margin: auto;
            border: 1px solid #000;
          }
          h2{
            font-size: 3rem;
            color: #FA8B1E;
            margin: 50px 70px;
          }
          ul{
            list-style-type: none;
          }
          `}

      </style>
    </div>
  );
}

export default Produce;
