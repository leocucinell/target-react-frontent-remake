import './SeasonalSection.css'
import valentinesBanner from '../../public/v-day-image.jpeg';

const SeasonalSection = ({ season }) => {
    return(
        <div className='seasonal-container'>
            <div className='seasonal-banner'>
                <img className='seasonal-image-banner' src={valentinesBanner} alt='Valentines banner' />
                <span className='banner-text'>Remember to pick up a gift for your loved ones</span>
            </div>
        </div>
    );
}

export default SeasonalSection;