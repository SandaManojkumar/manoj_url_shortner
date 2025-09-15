import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Profile from './Pages/Profile/Profile';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import UrlShortener from './Pages/Urlshortener/UrlShortener';
import Myurls from './Pages/MyUrls/Myurls';




function App() {
  return (
    <Router>
      <HeaderMegaMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/url/shortener' element={<UrlShortener />} />
        <Route path="/url/list" element={<Myurls/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<PrivateRoute />}>




        </Route>
      </Routes>
    </Router>
  )
}


export default App

