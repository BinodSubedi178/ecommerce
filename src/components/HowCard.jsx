import "./HowCard.css"

export const HowCard = ({ CardImage, TitleText, DescriptionText, IndexNumber }) => {
    return (
        <div className="how-card">
            <div className="image-area">
                <img src={CardImage} alt="" />
            </div>
            <div className="how-text-area">
                <div className="numbering-area">
                    <div className="inner-circle">
                        {IndexNumber}
                    </div>
                </div>
                <h4>
                    {TitleText}
                </h4>
                <p>{DescriptionText}</p>

            </div>
        </div>
    )
}
