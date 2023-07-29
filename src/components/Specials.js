import greeksalad from '../img/greeksalad.jpg'
import bruschetta from '../img/bruschetta.png'
import lemondessert from '../img/lemondessert.jpg'
import bike from '../img/bike.png'
import { Link } from 'react-router-dom'
import CallToAction from './CallToAction'

function Specials(props) {
    return (
    <section className="week-special">
        <div className='container'>
        <div className='two-columns'>
            <h2> This weeks specials!</h2>
            <CallToAction heading={props.heading} buttonUrl={props.buttonUrl}/>
        </div>
        <div className='three-columns'>
            <div className='item'>
                <img className='food-exmaple' src={greeksalad} alt="Greek Salad"></img>
                    <div className='title-and-price'>
                    <h3>Greek salad</h3>
                    <p>$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <Link  className='order-a-delivery' to='/order-online'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></Link>
            </div>

            <div className='item'>
                <img className='food-exmaple' src={bruschetta} alt='Bruschetta'></img>
                    <div className='title-and-price'>
                    <h3>Bruchetta</h3>
                    <p>$5.99</p>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <Link  className='order-a-delivery' to='/order-online'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></Link>
            </div>

            <div className='item'>
                <img className='food-exmaple' src={lemondessert} alt='Lemon Dessert'></img>
                    <div className='title-and-price'>
                    <h3>Lemon Dessert</h3>
                    <p>$5.00</p>
                    </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <Link  className='order-a-delivery' to='/order-online'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></Link>
            </div>
        </div>


        </div>
        </section> 
        )
        
    }

    export default Specials;