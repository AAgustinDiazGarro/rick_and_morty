import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

function Card({id,name, species,gender,status,origin,image,addFav,removeFav, onClose, myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const location = useLocation();

   
   const handleFavorite = ()  => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id,name,species,gender,status,origin,image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
             
               <button onClick={handleFavorite}>{isFav ?'❤️':'🤍'}</button>
            
         }
         {
            !(location.pathname === '/favorite') && <button onClick={() => onClose(id)}>X</button>
         }
         <Link to = {`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}

const mapStateToProp = (state)=>{
   return{
      myFavorites: state.myFavorites 
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char) => {dispatch(addFav(char))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}


export default  connect(
   mapStateToProp,
   mapDispatchToProps
)(Card);
