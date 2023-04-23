import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorite/Favorite';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'a95a6068cf96.33f00db255672a596c99';
const user = [{email : 'agus@gmail.com',
password : 'poli'},{email:'ale@gmail.com', password: '123asd'}]

function App() {

const location = useLocation();
const [access, setAccess] = useState(false);
let [characters,setCharacters] = useState([])
const navigate = useNavigate();

const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

const onClose = (id) => {
   setCharacters(characters.filter(character => character.id !== id))
   
}


const login = (userData) => {
   {user.forEach( users => {
            if(userData.email === users.email && userData.password === users.password){
               setAccess(true);
               navigate('/home');
            }
         }
      )
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);


   return (
      <div className='App'>
         {
         !(location.pathname === '/') && <Nav onSearch = {onSearch} setAccess = {setAccess} />
         } 

         <Routes>
            <Route path='/home' element = {<Cards characters={characters} onClose = {onClose} />} />
            <Route path='/about' element= {<About/>} />
            <Route path='/detail/:id' element= {<Detail/>} />
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorite' element= {<Favorites/>} />
         </Routes>

         
      </div>
   );
}

export default App;
