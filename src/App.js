
import Products from './components/Products';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';
import { Routes, Route} from "react-router-dom";
import { useEffect } from 'react';
import {auth} from "./firebase"
import {  onAuthStateChanged} from "firebase/auth";
import { useStateValue } from './StateProvider';
import Checkout from './components/CheckoutForm/Checkout';


//styles
import './App.css';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { actionTypes } from './reducer';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, []);
  return (
    
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path='/signin' element={<SignIn/>} />
    <Route exact path='/signup' element={<SignUp/>} />
    <Route exact path='/' element={<Products/>} />
    <Route  path='/checkout-page' element={<CheckoutPage/>} />
    <Route  path='/checkout' element={<Checkout/>} />
    </Routes>
    </div>
    
  );
}

export default App;
