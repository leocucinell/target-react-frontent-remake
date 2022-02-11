import './Navbar.css'

/* custom components */
import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {  
    return(
        <nav className='navbar-container'>
            <ul className='navbar-ul'>
                <li className='navbar-list-item'>Home</li>
                <li className='navbar-list-item'>Categories</li>
                <li className='navbar-list-item'>Deals</li>
                <li className='navbar-list-item'>Whats New</li>
                <li className='navbar-list-item'>Pickup & Delivery</li>
            </ul>
            <div className='navbar-search-container'>
                <Searchbar />
                <button className='cart-button'>Cart</button>
            </div>
            
        </nav>
    )
}

export default Navbar;