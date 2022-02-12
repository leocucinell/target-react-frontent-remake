import './ArrivalCard.css'

const ArrivalCard = ({ product ,price, image }) => {
    return (
        <div className='card-container'>
            <img src={image} alt='new arrival' />
            <div className='card-banner'>
                <p>{product}s Starting at</p>
                <span>${price}</span>
            </div>
        </div>
    );
}

export default ArrivalCard