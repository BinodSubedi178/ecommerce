import './Card.css'
export const Card = (phone) => {
    return (
        <div className='card-outer-container'>
            <div className={`original-price ${phone.data.price === phone.data.reduced_price ? `display-hidden` : "sale-pill"}`}>SALE</div>
            <div className='card-container'>
                <div className={`image-section`}>
                    <img src={phone.data.image} alt="/" />
                </div>
            </div>
            <div className="details-section">
                <h4>{phone.data.product_name}</h4>
                <div className='price-section'>
                    <span className={`original-price ${phone.data.price === phone.data.reduced_price ? `` : "line-through"}`}>
                        {phone.data.price}
                    </span>
                    <span className={`${phone.data.price === phone.data.reduced_price ? `display-hidden` : "reduced-price"}`}>{phone.data.reduced_price} </span>
                </div>
            </div>
        </div>


    )
}
