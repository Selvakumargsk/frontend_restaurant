import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Signin from "./pages/signin";
import RegisterForm from "./pages/register";
import TableBookingForm from "./pages/TableBooking";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookingDetails from "./pages/bookingDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/book" element={<TableBookingForm />} />
          <Route path="/bookingDetails" element={<BookingDetails />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
