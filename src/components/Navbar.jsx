import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router';


export const Navbar = () => {
  return (
    <div>
        <div className="main-wrapper">
            <div className="top-nav">
                <div className="logo-side">
                    <NavLink to = "/">
                        <img src={Logo} className="logo"/>
                        </NavLink>
                    <div className="icons">
                        <IoSearch />
                        <div className='cart'>
                        <FaShoppingCart />
                        <div className='cart-list-number'>0</div>
                        </div>
                    </div>
                </div>
                <div className="ham-side"> <span><TiThMenu /></span></div>
            </div>
            <div className="bottom-nav">
                <NavLink to="/" > All </NavLink>
                <NavLink to="/sale" > Sale </NavLink>
                <NavLink to="/apple" > Apple </NavLink>
                <NavLink to="/samsung" > Samsung </NavLink>
                <NavLink to="/google" > Google </NavLink>
            </div>
        </div>
    </div>
  )
}
