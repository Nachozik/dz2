import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import {useState} from "react";
import Merches from "./components/Products/Merches";
import MerchDetail from "./components/Products/MerchDetail";
import Users from "./components/Users/Users";
import UserDetails from "./components/Users/UserDetails";

function App() {
    const [phone, setPhone] = useState('+996(997-997-908)')

    return (
        <Router>
            <header>
                <nav>
                    <Link to="/">Дом</Link> &nbsp;|&nbsp;&nbsp;
                    <Link to="/merches">Товары</Link> &nbsp;|&nbsp;&nbsp;
                    <Link to="/about">О нас</Link> |&nbsp;&nbsp;
                    <Link to="/contacts">Контакты</Link> |&nbsp;
                    <Link to="/users">Пользователи</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>phone: {phone}</span>
                </nav>
            </header>
            <Routes>
                <Route path="/merches" element={<Merches />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
                <Route path="/merches/:id" element={<MerchDetail />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/users/:id" element={<UserDetails />}/>
            </Routes>
        </Router>
    );
}

export default App;
