import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actiontypes";
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
            const {data} = await axios.post(endpoint, character)

            if(!data.leength) throw Error('No hya favoritos');

            return dispatch({
               type: ADD_FAV,
               payload: data,
            }
         );
         
      } catch (error) {
         console.log(error.message);
      }
    };
 };


/* export const addFav = (pers) => {
    return {type: ADD_FAV, payload: pers}
} */

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint);

         if(!data.leength) throw Error('No hya favoritos');

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
         
      } catch (error) {
         console.log(error.message);
      }
    };
 };

/* export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
} */

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}