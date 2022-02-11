import './SeasonalSection.css'
import valentinesBanner from '../../public/v-day-image.jpeg';

const SeasonalSection = ({ season }) => {
    return(
        <div className='seasonal-container'>
            <img src={valentinesBanner} alt='Valentines banner' />
            <h1>Season: {season}</h1>
        </div>
    )
}

export default SeasonalSection