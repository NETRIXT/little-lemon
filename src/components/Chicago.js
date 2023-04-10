import mario from '../img/Mario-and-Adrian.jpg'
import chef from '../img/restaurant-chef.jpg'

function Chicago () {
    return (
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
    )
}

export default Chicago;