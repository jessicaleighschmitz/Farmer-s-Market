import React from "react";
import ProduceItem from './ProduceItem';

const availableProduce = [
 {
    month: "January",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes",
       "Turnips"
    ]
 },
 {
    month: "February",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes"
    ]
 },
 {
    month: "March",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Rhubarb",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes"
    ]
 },
 {
    month: "April",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Rhubarb",
       "Asparagus",
       "Garlic",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Potatoes"
    ]
 },
 {
    month: "May",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Rhubarb",
       "Asparagus",
       "Cauliflower",
       "Garlic",
       "Lettuce",
       "Potatoes",
       "Radishes"
    ]
 },
 {
    month: "June",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Rhubarb",
       "Blackberries",
       "Cherries",
       "Raspberries",
       "Strawberries",
       "Asparagus",
       "Broccoli",
       "Cauliflower",
       "Kohlrabi",
       "Lettuce",
       "Mushrooms",
       "Potatoes",
       "Radishes",
       "Squash"
    ]
 },
 {
    month: "July",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Rhubarb",
       "Apricots",
       "Blackberries",
       "Blueberries",
       "Cherries",
       "Melons",
       "Nectarines",
       "Peaches",
       "Raspberries",
       "Strawberries",
       "Tomatoes",
       "Beets",
       "Broccoli",
       "Brussel Sprouts",
       "Cabbage",
       "Carrots",
       "Cauliflower",
       "Cucumber",
       "Eggplant",
       "Garlic",
       "Green Beans",
       "Kohlrabi",
       "Lettuce",
       "Mushrooms",
       "Potatoes",
       "Radishes",
       "Squash",
       "Turnips"
    ]
 },
 {
    month: "August",
    selection: [
       "Apples",
       "Apricots",
       "Blackberries",
       "Blueberries",
       "Cherries",
       "Melons",
       "Nectarines",
       "Peaches",
       "Pears",
       "Plums",
       "Raspberries",
       "Rhubarb",
       "Strawberries",
       "Tomatoes",
       "Beets",
       "Broccoli",
       "Brussel Sprouts",
       "Cabbage",
       "Carrots",
       "Cauliflower",
       "Corn",
       "Cucumber",
       "Eggplant",
       "Garlic",
       "Green Beans",
       "Kohlrabi",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peas",
       "Peppers",
       "Potatoes",
       "Radishes",
       "Squash",
       "Turnips"
    ]
 },
 {
    month: "September",
    selection: [
       "Apples",
       "Blueberries",
       "Grapes",
       "Melons",
       "Peaches",
       "Pears",
       "Plums",
       "Raspberries",
       "Tomatoes",
       "Broccoli",
       "Brussel Sprouts",
       "Cabbage",
       "Carrots",
       "Cauliflower",
       "Corn",
       "Cucumber",
       "Eggplant",
       "Garlic",
       "Green Beans",
       "Kohlrabi",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peas",
       "Peppers",
       "Potatoes",
       "Radishes",
       "Squash",
       "Turnips"
    ]
 },
 {
    month: "October",
    selection: [
       "Apples",
       "Grapes",
       "Hazelnuts",
       "Melons",
       "Peaches",
       "Pears",
       "Tomatoes",
       "Broccoli",
       "Brussel Sprouts",
       "Cabbage",
       "Carrots",
       "Cauliflower",
       "Corn",
       "Cucumber",
       "Eggplant",
       "Garlic",
       "Green Beans",
       "Kohlrabi",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peas",
       "Peppers",
       "Potatoes",
       "Pumpkins",
       "Radishes",
       "Squash",
       "Turnips"
    ]
 },
 {
    month: "November",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
       "Broccoli",
       "Carrots",
       "Cauliflower",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes",
       "Squash",
       "Turnips"
    ]
 },
 {
    month: "December",
    selection: [
       "Apples",
       "Hazelnuts",
       "Pears",
      "Broccoli",
       "Carrots",
       "Cauliflower",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes",
       "Turnips"
    ]
 }
];
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
