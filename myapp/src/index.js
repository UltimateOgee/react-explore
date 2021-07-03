import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const data = [
  {
    id: 1,
    name: "wheel",
    desc: "you need this for the inside of the tire",
    img: "http://pngimg.com/uploads/car_wheel/small/car_wheel_PNG23305.png",
  },
  {
    id: 2,
    name: "baby car seat",
    desc: "you need this to transport babies",
    img: "https://i5.walmartimages.com/asr/e43c2722-40b9-446e-ae42-d950cfbfbba5.260ed804a3b47600c0f0522cb72cca46.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
];

function Cart() {
  return (
    <>
      <h3>This is my product shopping cart:</h3>
      <section className="productlist">
        <CartItems />
      </section>
    </>
  );
}

const CartItems = () => {
  return (
    <section>
      {data.map((item) => {
        return <Product className="productlist" key={item.id} {...item} />;
      })}
    </section>
  );
};

const Product = ({ name, desc, img, children }) => {
  return (
    <article className="product">
      <img src={img} alt="random product" />
      <h1>{name}</h1>
      <h4>{desc}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<Cart />, document.getElementById("root"));
