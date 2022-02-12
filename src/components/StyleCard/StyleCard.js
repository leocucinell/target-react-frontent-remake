import './StyleCard.css'

const StyleCard = ({  image, ProductTarget, Price }) => {
    return(
        <div className='style-card'>
            <img src={image} alt='style card' />
            <div className='style-card-info'>
                <h2>{ProductTarget}</h2>
                <span>from</span>
                <h3>${Price}</h3>
            </div>
        </div>
    )
}   

export default StyleCard;