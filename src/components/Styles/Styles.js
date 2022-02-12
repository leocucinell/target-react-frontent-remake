import './Styles.css'

import StyleCard from '../StyleCard/StyleCard'
import stylishWoman from '../../public/stylish-woman.jpeg'
import stylishMan from '../../public/stylish-man.jpeg';
import stylishKid from '../../public/stylish-kid.jpeg';
import stylishSandals from '../../public/sandals.jpeg'

const Styles = () => {
    return(
        <div className='styles-container'>
            <StyleCard image={stylishWoman} ProductTarget="Women's" Price='5' />
            <StyleCard image={stylishKid} ProductTarget="Kid's" Price='4' />
            <StyleCard image={stylishMan} ProductTarget="Men's" Price='6' />
            <StyleCard image={stylishSandals} ProductTarget="Sandals" Price='10' />
        </div>
    )
}

export default Styles