import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/logo.png'


export const Navbar = () => {
  return (
    <div>
        <div className="main-wrapper">
            <div className="top-nav">
                <div className="logo-side">
                    <img src={Logo} className="logo"/>
                    <div className="icons">
                        <IoSearch />
                        <FaShoppingCart />
                        <div className='cart-list-number'>0</div>
                    </div>
                </div>
                <div className="menu-side"><RxHamburgerMenu /></div>
            </div>
            <div className="bottom-nav">
                <a href="#">All</a>
                <a href="#">Sale</a>
                <a href="#">Apple</a>
                <a href="#">Samsung</a>
                <a href="#">Google</a>
            </div>
        </div>
    </div>
  )
}
