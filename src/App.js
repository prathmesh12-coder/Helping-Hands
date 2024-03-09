import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import Donate from "./screens/Donate";
import Label from "./screens/Label";
import Events from "./screens/Events";
import DonateDetail from "./screens/DonateDetail";
import ArticleDetail from "./screens/ArticleDetail";
import EventDetail from "./screens/EventDetail";
import NotFound from "./screens/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterForm from "./components/layout/RegisterForm";
import LoginForm from "./components/layout/LoginForm";
import Verify from "./screens/Verify";
import VerifyDonor from "./screens/VerifyDonor";
import Map from "./components/layout/Map";
import LoginFormUser from "./components/layout/LoginFormUser";
import RegisterFormUser from "./components/layout/RegisterFormUser";
import CreateDonation from "./components/layout/CreateDonation";
import "./App.css"
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/layout/Checkout";
import Checkout2 from "./components/layout/Checkout2";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home Header={<Header/>} Footer={<Footer/>} Map={<Map/>}/>} />
        <Route path="/articles" element={<Articles Header={<Header/>} Footer={<Footer/>} />} />
        <Route path="/donations" element={<Donate Header={<Header/>} Footer={<Footer/>} />} />
        <Route path="/events" element={<Events Header={<Header/>} Footer={<Footer/>} />} />
        <Route path="/getspecificdonationcard/:donationcardId" element={<DonateDetail Header={<Header/>} Footer={<Footer/>}/>} />
        <Route path="/events/:eventId" element={<EventDetail Header={<Header/>} Footer={<Footer/>}/>} />
        <Route path="/articles/:postId" element={<ArticleDetail Header={<Header/>} Footer={<Footer/>}/>} />
        <Route path="*" element={<NotFound Header={<Header/>} Footer={<Footer/>}/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/loginUser" element={<LoginFormUser />} />
        <Route path="/createdonation" element={<CreateDonation/>} />
        <Route path="/registerUser" element={<RegisterFormUser/>} />
        <Route path="/user/verify/:userId" element={<Verify Footer={<Footer/>} />} />
        <Route path="/donor/verifydonor/:donorId" element={<VerifyDonor Footer={<Footer/>} />} />
        <Route path="/label/:labelId" element={<Label />} />
        <Route path="/donateus" element={<Checkout />} />
        <Route path="/checkout" element={<Checkout2 />} />
      </Routes>
      `<ToastContainer/>
    </>
  );
}

export default App;
