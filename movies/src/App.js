import {Route,Routes} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies/Movies";
import Auth from './components/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminActions, userActions } from './store';
import Booking from './components/Bookings/Booking';
import UserProfile from './Profile/UserProfile';
import AddMovie from './components/Movies/AddMovie';


function App() {
  const dispatch=useDispatch();

  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
    }else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login());
    }
  },[])
  return (
    <div >
     {/* Header  */}
     <Header/>
     <section>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route  path="/movies" element={<Movies/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<UserProfile/>}/>
      <Route path="/add" element={<AddMovie/>}/>
      <Route path="/booking/:id" element={<Booking/>}/>
      <Route path="/user-admin" element={<AddMovie/>}/>

      </Routes>
     </section>
     
     {/* Home  */}
    </div>
  );
}

export default App;
