import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import OrderOnline from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';

function Main () {
    return (
        <BrowserRouter>
        <Routes> 
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/order-online" element={<OrderOnline/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/menu" element={<MenuPage/>}></Route>
    <Route path="/reservations" element={<BookingPage/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default Main;