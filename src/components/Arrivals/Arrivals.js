import './Arrivals.css'
import ArrivalCard from '../ArrivalCard/ArrivalCard';

import bed from '../../public/bed.jpeg';
import bouffard from '../../public/bouffard.jpeg';
import couch from '../../public/couch.jpeg';
import desk from '../../public/desk.jpeg';

const Arrivals = () => {
    return(
        <div className='arrivals-container'> {/* flex container */}
            <ArrivalCard product='bed' image={bed} price='100' />
            <ArrivalCard product='bouffard' image={bouffard} price='25' />
            <ArrivalCard product='couche' image={couch} price='50' />
            <ArrivalCard product='desk' image={desk} price='30' />
        </div>
    );
}

export default Arrivals