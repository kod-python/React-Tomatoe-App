import { assets } from "../../assets/assets"
import "./LoginPopup.css"
import { useState } from "react"

const LoginPopup = ({ setShowLogin }) => {

	const [currentState, setCurrentState] = useState("Sign Up")

  return (
	<div className="login-popup">
		<form className="login-popup-container">
			<div className="login-popup-title">
				<h2>{currentState}</h2>
				<img 
				onClick={() => setShowLogin(false)}
				src={assets.cross_icon} alt="" />
			</div>
				<div className="login-popup-inputs">
					{
						currentState === "login" ? (<></>) : (
							<input type="text" placeholder="name" required />
					)}

					<input type="email" placeholder="email" required />
					<input type="password" placeholder="password" required />
				</div>
				
				<button>
					{currentState === "Sign Up" ? "Create Account" : "Login"}
				</button>

				<div className="login-popup-condition">
					<input type="checkbox" required />
					<p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>
				</div>

				{
					currentState === "Login" ? (
						<p>Dont have an account? <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span></p>
					) : (
						<p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login</span></p>
					)
					
				}

		</form>
	</div>
	
)
}



export default LoginPopup;