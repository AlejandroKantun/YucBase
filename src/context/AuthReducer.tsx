import { AuthState } from "../context/AuthContext";
import { League } from "../interfaces/LeagueResponse";
import { Tournament } from "../interfaces/TournamentsResponse";

type AuthAction=
    |{type:'SelectTournament', payload:Tournament}
    |{type:'SelectLeague', payload:League}
    |{type:'ResetSelected'}

export const authReducer=(state:AuthState, action:AuthAction): AuthState =>{
//ese auth reducer siempre tiene que regresar un estado, en este caso de tipo AuthState
    switch (action.type) {
        case 'SelectTournament':
            return {
                ...state,
                tournamentSelected:action.payload
            };
        case 'SelectLeague':
            return {
                ...state,
                leagueSelected:action.payload
            };
        case 'ResetSelected':
            return{
                ...state,
                tournamentSelected:undefined
            }
        default:
            return state;
    }
}