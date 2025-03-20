import { BrowserRouter as Router, Routes, Route,Navigate,Outlet } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Blog from './blog';
import Training from './train';
import ScrollTopBtn from './scrollTop';
import Footer from './footer';
import Login from './login';
import Sales from './sales';
import Spotlight from './spotlight';
import Dashboard from './Dashboard';
import Profile from './profile';

export default function App() {
    return (
      <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/train" element={<Training />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/spotlight" element={<Spotlight />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            
        </Router>
        <Outlet/>
        <ScrollTopBtn />
        <Footer/>
        </>
    );
}
