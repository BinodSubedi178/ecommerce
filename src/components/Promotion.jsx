import './Promotion.css'
import { CartSidebar } from './AllComponents'
export const Promotion = ({ handleCrossClick, crossState }) => {

  return (
    <div className="promotion-banner">
      {crossState ? <CartSidebar handleCrossClick={handleCrossClick} /> : ""}

      Add an announcement about an active sale or promotion <button className='banner-button'>Learn More</button>
    </div>
  )
}
