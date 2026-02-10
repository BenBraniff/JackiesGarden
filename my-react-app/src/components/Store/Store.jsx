import { FigureEightPolynomialKnot } from "three/examples/jsm/curves/CurveExtras.js";
import "./Store.css";

import PinkRoseImg from "../../assets/pink-roses.png";
import RedRoseImg from "../../assets/red-roses.jpg";
import LavendarImg from "../../assets/lavendar-flowers.jpeg";

import hat from "../../assets/hat.png";
import shirt from "../../assets/shirt.png";
import sticker from "../../assets/sticker.png";

const storeData = [
  {
    category: "Flowers",
    items: [
      {
        id: 1,
        title: "Pink Roses",
        price: "$12",
        img: PinkRoseImg,
      },
      {
        id: 2,
        title: "Red Roses",
        price: "$10",
        img: RedRoseImg,
      },
      {
        id: 3,
        title: "Lavendar Bouquet",
        price: "$15",
        img: LavendarImg,
      },
    ],
  },
  {
    category: "Merch",
    items: [
      {
        id: 7,
        title: "Shirt",
        price: "$25",
        img: shirt,
      },
      {
        id: 8,
        title: "Hat",
        price: "$20",
        img: hat,
      },
      {
        id: 9,
        title: "Stickers",
        price: "$2",
        img: sticker,
      },
    ],
  },
];

const Store = () => {
  return (
    <div className="store-container">
      <div className="store-body">
        <h1 className="title">Store</h1>
        <div className="space"></div>
        {storeData.map((section) => (
          <section key={section.category} className="store-section">
            <h2>{section.category}</h2>
            <div className="item-row">
              {section.items.map((item) => (
                <div key={item.id} className="item-card">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Store;
