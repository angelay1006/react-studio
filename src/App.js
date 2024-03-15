import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import 'bootstrap/dist/css/bootstrap.min.css';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState([]);
  /* add your cart state code here */
  

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
  };

  const totalCost = cart.reduce((total, currentItem) => total + currentItem.price, 0);


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addToCart={addToCart} /> // replace with BakeryItem component
        
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.length === 0 && <p>Nothing here just yet!</p>}
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>

    </div>
  );
}

export default App;
