import React, { createContext, useReducer } from 'react'
import { Tournament } from '../interfaces/TournamentsResponse';
import { authReducer } from '../context/AuthReducer';
import { League } from '../interfaces/LeagueResponse';

//define information that will be stored
export interface AuthState{
    tournamentSelected:Tournament|undefined,
    leagueSelected:League|undefined

}
//Initial State

export const authInitialState:AuthState={
    tournamentSelected:undefined,
    leagueSelected:undefined
}

//Usar la interface para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState:AuthState,
    resetSelected:()=>void,
    selectTournament:(tournament: Tournament) => void,
    selectLeague:(league: League) => void
}

//Crear el contexto
export const AuthContext= createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({children} : any)=> {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const resetSelected=()=>{
        dispatch({type:'ResetSelected'})
    }

    const selectTournament=(tournament:Tournament)=>{
        dispatch({type:'SelectTournament',payload:tournament})
    }

    const selectLeague=(league:League)=>{
        dispatch({type:'SelectLeague',payload:league})
    }
    

    return(
        <AuthContext.Provider value={{
            authState,
            resetSelected,
            selectTournament,
            selectLeague
        }}>
            {children}
        </AuthContext.Provider>
    )
}