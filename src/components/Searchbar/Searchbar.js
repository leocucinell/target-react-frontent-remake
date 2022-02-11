import './Searchbar.css'

const Searchbar = () => {
    return(
        <section className='searchbar-container' role='search'>
            <form className='searchbar-form' action='#' method='get'>
                <input className='searchbar-input' type='text' placeholder='Search' />
            </form>
        </section>
    );
}

export default Searchbar;