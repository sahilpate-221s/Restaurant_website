import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import Home from '../components/home/Home'
import About from '../components/about/About'
import Menu from '../components/menu/Menu'
import Contact from '../components/contactUs/Contact'
import Login from '../components/login/Login'
import SignUp from '../signUp/SignUp'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

      </Route>
    </>
  )
);


export default router;