import andrea from '../img/andrea.jpg'
import emma from '../img/emma.jpg'
import melo from '../img/melo.jpg'
import justin from '../img/justin.jpg'

function CustomerSay () {
    return (
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
    )

}

export default CustomerSay;