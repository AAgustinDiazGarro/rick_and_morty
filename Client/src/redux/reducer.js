import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actiontypes";
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload, // [...state.allCharacters,action.payload],
                allCharacters: action.payload// [...state.allCharacters,action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload//state.myFavorites.filter(pers => pers.id !== action.payload)
            }
        
        case FILTER:
            const allCharacFilt = state.allCharacters.filter((char) => 
            char.gender === action.payload)
            return{
                ...state,
                //aca hicimos para q podamos volver todos los personajes q teniamos en favoritos
                myFavorites: 
                    action.payload === 'allCahara'
                    ? [...state.allCharacters]
                    : allCharacFilt
            }

        case ORDER: 
            const copyFav = [...state.allCharacters];
            return{
                ...state,
                myFavorites:
                    action.payload === 'A'                    
                    ? copyFav.sort((a,b) => a.id -b.id)
                    :copyFav.sort((a,b) => b.id - a.id)
            }

        default: 
            return {...state};
    }

}

export default reducer;