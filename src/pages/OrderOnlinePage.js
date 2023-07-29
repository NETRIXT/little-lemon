import Footer from "../components/Footer";
import Header from "../components/Header";

function OrderOnline() {
    return (
        <>
        <Header/>
        <div className="container">
        <h1>Order Online</h1>
        <h2>To place an order, please contact: <a href="tel:+372521451">+372521451</a></h2>
        </div>
        <Footer/>
        </>
    )
}

export default OrderOnline;