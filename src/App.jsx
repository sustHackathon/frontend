import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Medicine from './pages/Medicine'
import Contact from './pages/Contact'
import AdminProfile from './admin/AdminProfile'
import AddMedicine from './admin/AddMedicine'
import SearchMedicine from './pages/SearchMedicine'
import CustomerProfile from './pages/CustomerProfile'
import RechargeAccount from './pages/RechargeAccount'
import BuyPage from './pages/BuyPage'
import HotelSignUp from './hotel/HotelSignUp'
import ShowHotels from './hotel/ShowHotels'
import SearchHotel from './hotel/SearchHotel'
import TouristRecharge from './tourist/TouristRecharge'
import HotelBooking from './tourist/HotelBooking'
import Chat from './chat/Chat'
import GeneralChat from './chat/GeneralChat'
import BudgetFriendly from './chat/BudgetFriendly'
import Bot from './chat/Bot'
import TouristSheduled from './tourist/TouristSheduled'

function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/medicine" element={<Medicine/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/adminProfile" element={<AdminProfile/>} />
    <Route path="/addMedicine" element={<AddMedicine/>} />
    <Route path="/searchMedicine" element={<SearchMedicine/>} />
    <Route path="/customerProfile" element={<CustomerProfile/>} />
    <Route path="/rechargeAccount" element={<RechargeAccount/>} />
    <Route path="/buy/:medicineId" element={<BuyPage />} />
    <Route path="/hotelSignUp" element={<HotelSignUp/>} />
    <Route path="/showHotel" element={<ShowHotels/>} />
    <Route path="/searchHotel" element={<SearchHotel/>} />
    <Route path="/touristRecharge" element={<TouristRecharge/>} />
    <Route path="/hotelBooking/:userid" element={<HotelBooking/>} />
    <Route path="/chat" element={<Chat/>} />
    <Route path="/generalChat" element={<GeneralChat/>} />
    <Route path="/budgetFriendly" element={<BudgetFriendly/>} />
    <Route path="/bot" element={<Bot/>} />
    <Route path="/touristSheduled" element={<TouristSheduled/>} />

    
  </Routes>
  </BrowserRouter>
}

export default App
