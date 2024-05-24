import { useEffect, useState } from 'react'
import { tournamentsAPI } from '../data/devData';
import { Tournament, TournamentsResponse } from '../interfaces/TournamentsResponse';
import { League } from '../interfaces/LeagueResponse';
import { getTournamentsByLeagueId } from '../api/BaseballDB';

export const useTournaments = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([])
    const [isLoadingTournaments, setIsLoadingTournaments] = useState(false)
    let leagueAux:Tournament[]=[]

    useEffect(() => { loadTournaments()}, [])
    
    const loadTournaments =async (league?:League)=>{
        setIsLoadingTournaments(true)
        //const tournamentResponse:TournamentsResponse= tournamentsAPI;
        const tournamentResponse:TournamentsResponse=await getTournamentsByLeagueId(league!,true)
        console.log(tournamentResponse)

        if(tournamentResponse.data.length>0){
            for (let i=0; i<tournamentResponse.data.length; i++){
                leagueAux.push(tournamentResponse.data[i].attributes as Tournament)
            }
        }
        setTournaments(leagueAux)
        setIsLoadingTournaments(false)

    }

    return {
        tournaments, 
        loadTournaments,
        isLoadingTournaments
    }
}