/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
// /* eslint-disable no-unused-vars */
// import "./Cart.css"
// import { useContext } from "react"
// import { StoreContext } from "../../context/StoreContext" 

// const Cart = () => {

// 	const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)

// 	return (
// 		<div className="cart">
// 			<div className="cart-items">
// 				<div className="cart-items-title"> 
// 					<p>Items</p>
// 					<p>Title</p>
// 					<p>Price</p>
// 					<p>Quantity</p>
// 					<p>Total</p>
// 					<p>Remove</p>
// 				</div>
// 				<hr />
// 				<hr />

// 					{
// 						// eslint-disable-next-line no-unused-vars
// 						food_list.map((item, index) => {
// 							if (cartItems[item._id] > 0) {
// 								return(
									
// 									// eslint-disable-next-line react/jsx-key
// 									<div className="cart-items-title cart-items-item">
// 										<img src={item.image}/>
// 										<p>{item.name}</p>
// 										<p>Ghc {item.price}</p>
// 										<p>{cartItems}{item._id}</p>
// 										<p> Ghc {cartItems[item.name] * item.price}</p>
// 										<p onClick={() => removeFromCart(item._id)}
// 											className="cross">
// 											x
// 										</p>
// 									</div>

// 								);
// 							}
// 						})}
// 			</div>

// 			<div className="cart-bottom">
// 				<div className="cart-total">
// 					<h2>Cart-Total</h2>
// 					{/* <p>Ghc {getTotalCartAmount()}</p> */}

// 					<div>
// 						<div className="cart-total-details"></div>
// 						<p>Subtotal</p>
// 						<p>Ghc 0.00</p>
// 					</div>
// 					<hr />
// 					<div>
// 						<div className="cart-total-details"></div>
// 						<p>Delivery Charges</p>
// 						<p>Ghc 0.00</p>
// 					</div>
// 					<hr />
// 					<div className="cart-total-details">
// 						<p>Total</p>
// 						<p>Ghc 0.00</p>
// 					</div>
// 				</div>
// 				<button>Proceed To Checkout</button>
// 			</div>
// 			<div className="cart-promocode">
// 				<div>
// 					<p>Enter promo code here</p>
// 					<div className="cart-promocode-input">
// 						<input type ="text" placeholder="Promo code"></input>
// 						<button>Submit</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
		
// 	)
// }

// export default Cart


import "./Cart.css"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);


	const navigate = useNavigate ();

	return (
		<div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              
                // eslint-disable-next-line react/jsx-key
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Ghc {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p> Ghc {cartItems[item._id] * item.price}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
              
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ghc {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>Ghc {getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>Ghc {getTotalCartAmount () === 0 ? 0 : getTotalCartAmount() + 10}</p>
            </div>
          </div>
          <button onClick={() => navigate("/placeorder")}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter promo code here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
	

