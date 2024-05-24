import { useState } from 'react'
import { getTeamsTournamentsByTournamentId } from '../api/BaseballDB';
import { TeamsTournamentsAPI } from '../data/devData';
import { Included, TeamsTournamentsResponse, TeamTournament } from '../interfaces/TeamsTournamentsResponse';
import { Tournament } from '../interfaces/TournamentsResponse';

export const useTeamsTournaments = () => {
    const [teamsTournaments, setTeamsTournaments] = useState<TeamTournament[]>([])
    const [teamsTournamentResponse, setTeamTournamentsResponse] = useState<TeamsTournamentsResponse>()
    const [teamsTournamentsIncluded, setTeamsTournamentsIncluded] = useState<Included[]>([])
    const [isLoadingTournament, setIsLoadingTournament] = useState(false)
    
    let teamTournamentAux:TeamTournament[]=[]
    let dataIncludedAux:Included[]=[]
    
    const loadTournaments =async (Tournament:Tournament)=>{
        setIsLoadingTournament(true)
        const teamsTournaments:TeamsTournamentsResponse= await getTeamsTournamentsByTournamentId(Tournament!)

        if (teamsTournaments){
        setTeamTournamentsResponse(teamsTournaments);
        
            if(teamsTournaments.data.length>0){
                        for (let i=0; i<teamsTournaments.data.length; i++){
                            teamTournamentAux.push(teamsTournaments.data[i].attributes as TeamTournament)
                            dataIncludedAux.push(teamsTournaments.included[i] as Included)

                        }
                    }
       
        setTeamsTournaments(teamTournamentAux)
        setTeamsTournamentsIncluded(dataIncludedAux)
        }
        
        setIsLoadingTournament(false)

    }

    return {
        teamsTournaments,
        teamsTournamentsIncluded, 
        loadTournaments,
        isLoadingTournament,
        teamsTournamentResponse
    }
}