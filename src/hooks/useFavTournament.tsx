import React, { useEffect, useState } from 'react'
import { retrieveFavoriteTournament } from '../data/saveUserPreferences';

interface FavTournament{
    isLoading:boolean,
    favTournament:string|null
}

export const useFavTournament = () => {
  const [state, setState] = useState<FavTournament>({
      isLoading:true,
      favTournament:null,
  });

  const getFavTournament= async ()=>{
      const favTournamentPromise = await retrieveFavoriteTournament();
        setState({
            isLoading:false,
            favTournament:favTournamentPromise
        })
  }

  useEffect(() => {
    getFavTournament();
  }, []);

  return{
      ...state
  }
  

}
