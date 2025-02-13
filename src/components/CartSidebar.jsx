import { MdOutlineCancel } from "react-icons/md";
import './CartSidebar.css'


export const CartSidebar = ({ handleCrossClick }) => {
    return (
        <div className="cart-sidebar">
            <div className="cart-transparent" onClick={handleCrossClick}>
            </div>
            <div className="cart-part">
                <div className="title-part">
                    <div className="title-left">
                        <h3>Your Cart</h3>
                        <div className='cart-list-number'>0</div>
                    </div>
                    <div className="cross-icon">
                        <span onClick={handleCrossClick}>
                            <MdOutlineCancel />
                        </span>
                    </div>
                </div>
                <hr className='cart-hr-line' />
            </div>
        </div>
    )
}
