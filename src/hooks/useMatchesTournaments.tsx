import { useEffect, useState } from 'react'
import { getMatchesByTournamentId } from '../api/BaseballDB';
import { MatchesTournamentsAPI } from '../data/devData';
import { MatchesTournamentsResponse, IncludedAttributes, Data } from '../interfaces/MatchesTournamentsResponse';
import { Tournament } from '../interfaces/TournamentsResponse';

export const useMatchesTournaments = () => {
    const [matchesTournamentsResponse, setMatchesTournamentsResponse] = useState<MatchesTournamentsResponse>()
    const [isLoadingMatchesTournament, setIsLoadingMatchesTournament] = useState(false)
    const [isLoadingWeeks, setIsLoadingWeeks]=useState(false)
    const [gameWeekNumbers,setGameWeekNumbers] = useState<number[]>([])
    const [matchesByWeek, setMatchesByWeek]=useState<Data[]>([])
    let gameWeekNumbersIn:number[]=[]
 
    const loadMatchesTournaments =async (Tournament:Tournament)=>{
        setIsLoadingMatchesTournament(true)
        //const matchesTournamentsRes:MatchesTournamentsResponse= MatchesTournamentsAPI;
        const matchesTournamentsRes:MatchesTournamentsResponse=await getMatchesByTournamentId(Tournament!)

        setMatchesTournamentsResponse(matchesTournamentsRes)
        if(matchesTournamentsRes.data.length>0){
            for (let i=0; i<matchesTournamentsRes.data.length; i++){
                gameWeekNumbersIn.push(matchesTournamentsRes.data[i].attributes.game_week_mumber)
            }
        }
        gameWeekNumbersIn = [...new Set(gameWeekNumbersIn)];
        gameWeekNumbersIn.sort((a, b) => b- a);
        setGameWeekNumbers(gameWeekNumbersIn);
        setIsLoadingMatchesTournament(false)

    }
    
    const getMatchesByWeekNumber=(weekNumber:number)=>{
        setIsLoadingWeeks(true)
        let dataAux: Data[]=[]

        if (matchesTournamentsResponse && matchesTournamentsResponse.data.length>0){
        for (let i =0 ; i<matchesTournamentsResponse?.data.length;i++){
            if (matchesTournamentsResponse.data[i].attributes.game_week_mumber===weekNumber){
                dataAux.push(matchesTournamentsResponse.data[i])
            }
        }
        }
        setMatchesByWeek(dataAux)

        setIsLoadingWeeks(false)


        
    }

    const getTeamIncludedByID=(teamID:string)=>{
        if (matchesTournamentsResponse){
            for (let i =0 ; i<matchesTournamentsResponse.included.length;i++){
                    if (matchesTournamentsResponse.included[i].attributes.id===teamID){
                        return matchesTournamentsResponse.included[i].attributes;
                    }
                }
        }
    }

    return {
        matchesTournamentsResponse,
        isLoadingMatchesTournament,
        loadMatchesTournaments,
        gameWeekNumbers,
        isLoadingWeeks,
        matchesByWeek,
        getMatchesByWeekNumber,
        getTeamIncludedByID
    }
}

