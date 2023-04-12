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
      <Heading heading="Reserve a Table"/>
      <Specials heading="Online Menu"/>
      <CustomerSay/>
      <Chicago/>
      </main>
      <Footer/>
      </>
    );
  }
  
  export default Homepage;