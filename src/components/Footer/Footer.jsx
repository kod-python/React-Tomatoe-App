import { assets } from "../../assets/assets"
import "./Footer.css"

const Footer = () => {
  return (
	<div className="footer" id="footer">
		<div className="footer-content">
			<div className="footer-content-left">
				<img src={ assets.logo} alt="" />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio dolores doloremque.
				</p>
				<div className="footer-social-icons">
					<img src={assets.facebook_icon} alt="" />
					<img src={assets.twitter_icon} alt="" />
					<img src={assets.linkedin_icon} alt="" />
				</div>
			</div>
			<div className="footer-content-center">
				<h2>Company</h2>
				<ul>
				<li>Home</li>
				<li>About</li>
				<li>Delivery</li>
				<li>Privacy Policy</li>
				</ul>
			</div>
			<div className="footer-content-right">
				<h2>Get in Touch</h2>
				<ul>
				<li>+257 3894 2765</li>
				<li>Tomato@gmail.com</li>
				
				</ul>
			</div>
		</div>
		<hr />
		<p className="footer-copyright">Copyright &copy; G H O S T</p>
	</div>
  );
};

export default Footer
