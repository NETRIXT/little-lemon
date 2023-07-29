import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Specials from '../components/Specials';
import CustomerSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

function Homepage() {
    return (
      <>
      <Header/>
      <main>
      <Heading heading="Reserve a Table" buttonUrl="reservations" />
      <Specials heading="Online Menu" buttonUrl="menu"/>
      <CustomerSay/>
      <Chicago/>
      </main>
      <Footer/>
      </>
    );
  }
  
  export default Homepage;