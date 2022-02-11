import './Home.css'

/* Thrid Party Components */

/* Custom components */
import Navbar from '../../components/Navbar/Navbar';
import SeasonalSection from '../../components/SeasonalSection/SeasonalSection';
import Styles from '../../components/Styles/Styles';
import Arrivals from '../../components/Arrivals/Arrivals';
import Deals from '../../components/Deals/Deals';
import Trending from '../../components/Trending/Trending';
import Categories from '../../components/Categories/Categories';
import Commitments from '../../components/Commitments/Commitments';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
    <div className="App">
        <Navbar />
        <div className='align-page'>
            <SeasonalSection season="Spring" />
            <Styles />
            <Arrivals />
            <Deals />
            <Trending />
            <Categories />
            <Commitments />
        </div>
        <Footer />
    </div>
    );
}

export default Home