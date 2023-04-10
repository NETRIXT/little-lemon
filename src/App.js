import './App.css';
import './grid.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import CustomerSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
    <Header/>
    <main>
    <Homepage heading="Reserve a Table"/>
    <Specials heading="Online Menu"/>
    <CustomerSay/>
    <Chicago/>
    </main>
    <BookingPage/>
    <Footer/>
    </>
  );
}

export default App;
