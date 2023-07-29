import restauranfood from '../img/restauranfood.jpg'
import CallToAction from './CallToAction';


function Heading (props) {
    return (
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

        <CallToAction heading={props.heading} buttonUrl={props.buttonUrl}/>
        </div>

        <div className='right-section'>
            <img src={restauranfood} alt='main-logo'></img>
            </div>
        </div>
        </div>
         </section>
    )
}

export default Heading;