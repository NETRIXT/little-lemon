import restauranfood from '../img/restauranfood.jpg'
import greeksalad from '../img/greeksalad.jpg'
import bruschetta from '../img/bruschetta.png'
import lemondessert from '../img/lemondessert.jpg'
import bike from '../img/bike.png'
import andrea from '../img/andrea.jpg'
import emma from '../img/emma.jpg'
import melo from '../img/melo.jpg'
import justin from '../img/justin.jpg'
import mario from '../img/Mario-and-Adrian.jpg'
import chef from '../img/restaurant-chef.jpg'

function Main() {
    return (
        <main>
         <section className="intro">
         <div className='container'>
            <div className="intro-section">
            <div className='left-section'>
                <div className='intro-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        </div>
        <p>Laborum amet deserunt ex consequat id quis culpa duis officia nostrud eiusmod nisi.
            Ullamco officia incididunt quis elit. Cupidatat mollit duis mollit Lorem aliquip in.
            Non elit qui eu exercitation aliqua duis non elit proident duis.</p>

        <button className='yellow-cta'>Reserve a Table</button>
        </div>

        <div className='right-section'>
            <img src={restauranfood} alt='main-logo'></img>
            </div>
        </div>
        </div>
         </section>

        <section className="week-special">
        <div className='container'>
        <div className='two-columns'>
            <h2> This weeks specials!</h2>
            <button className='yellow-cta'>Online Menu</button>
        </div>
        <div className='three-columns'>
            <div className='item'>
                <img className='food-exmaple' src={greeksalad} alt="Greek Salad"></img>
                    <div className='title-and-price'>
                    <h3>Greek salad</h3>
                    <p>$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <a href='#' className='order-a-delivery'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></a>
            </div>

            <div className='item'>
                <img className='food-exmaple' src={bruschetta} alt='Bruschetta'></img>
                    <div className='title-and-price'>
                    <h3>Bruchetta</h3>
                    <p>$5.99</p>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <a href='#' className='order-a-delivery'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></a>
            </div>

            <div className='item'>
                <img className='food-exmaple' src={lemondessert} alt='Lemon Dessert'></img>
                    <div className='title-and-price'>
                    <h3>Lemon Dessert</h3>
                    <p>$5.00</p>
                    </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a href='#' className='order-a-delivery'>
                    <p>Order a delivery</p> <img className='bike' src={bike} alt='bike'></img></a>
            </div>
        </div>


        </div>
        </section>

        <section className='testimonials'>
            <div className='container'>
                <h2 className='centered-text'>Testimonials</h2>
                <div className='four-columns'>
                    <div className='review'>
                        <div className='review-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    </div>
                        <div className='two-columns'>
                            <img src={emma} className='img-portrait' alt='Emma'></img>
                            <h3>Emma</h3>
                        </div>
                        <p>Little Lemon is one of my favorite restaurants in town! The food is always fresh, flavorful, and beautifully presented. I especially love their salads and seafood dishes. 
                            The staff is also very friendly and attentive, making for a great dining experience every time.</p>
                    </div>

                    <div className='review'>
                    <div className='review-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    </div>
                        <div className='two-columns'>
                        <img src={justin} className='img-portrait' alt='Justin'></img>
                            <h3>Justin</h3>
                        </div>
                        <p>I recently had the pleasure of dining at Little Lemon and it exceeded all of my expectations. The atmosphere is cozy and inviting, and the food is absolutely delicious.
                             I particularly enjoyed their signature dish, the Lemon Chicken, which was perfectly cooked and bursting with flavor. I can't wait to go back!</p>
                    </div>

                    <div className='review'>
                    <div className='review-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    </div>
                        <div className='two-columns'>
                        <img src={andrea} className='img-portrait' alt='Andrea'></img>
                            <h3>Andrea</h3>
                        </div>
                        <p>Little Lemon is a must-visit for anyone who loves great food and excellent service. Their menu offers a wonderful selection of dishes, all made with the freshest ingredients. I especially enjoyed their vegetarian options, which were creative and delicious. 
                            The staff was also incredibly welcoming and attentive, making our dining experience truly enjoyable.</p>
                    </div>

                    <div className='review'>
                    <div className='review-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    </div>
                        <div className='two-columns'>
                        <img src={melo} className='img-portrait' alt='Melo'></img>
                            <h3>Melo</h3>
                        </div>
                        <p>Little Lemon is hands down one of the best restaurants in town. The food is consistently amazing and the staff always goes above and beyond to make sure we have a great experience. The seafood dishes are particularly outstanding, and the drinks menu is also impressive. 
                            I would highly recommend Little Lemon to anyone looking for a fantastic dining experience.</p>
                    </div>

                </div>
            </div>
        </section>

        <section className='little-lemon-about'>
            <div className='container'>
            <div className='two-columns'>
            <div className='left-side'>
            <div className='intro-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        </div>
        <div className='about-little-lemon'>
            <p>
            Little Lemon Restaurant is a popular dining destination known for its eclectic menu of traditional and contemporary dishes. The restaurant boasts two skilled chef cooks, Mario and Adrian, who bring their unique talents and expertise to the kitchen.

<br></br><br></br>Chef Mario is a seasoned professional with a passion for Italian cuisine. He specializes in homemade pasta dishes and has spent years perfecting his craft. Customers rave about his fresh gnocchi and fettuccine, which are served with an array of delicious sauces.

<br></br><br></br>Chef Adrian, on the other hand, has experience working in Michelin-starred restaurants and excels at seafood and meat dishes. He has a diverse culinary background and is known for his ability to blend different flavors and textures to create unique and unforgettable dishes. Customers love his succulent grilled salmon and slow-roasted beef, which are always cooked to perfection.

<br></br><br></br>Together, Mario and Adrian make an unstoppable team, creating visually stunning and delicious meals that keep customers coming back for more. They are always experimenting with new techniques and ingredients, pushing the boundaries of culinary innovation.
            </p>
        </div>
        
        </div>
        <div className='right-side'>
        <img className='mario-img' src={mario} alt='Chefs'></img>
        <img className='chef-img' src={chef} alt='Main chef'></img>
        </div>
            </div>
            
            </div>





        </section>



        </main>
    )
}

export default Main;