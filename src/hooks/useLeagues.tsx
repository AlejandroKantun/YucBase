import { useEffect, useState } from 'react'
import excavacionesDB, { getLeagues } from '../api/BaseballDB';
import { leaguesAPI } from '../data/devData';
import { League, LeagueResponse } from '../interfaces/LeagueResponse';

export const useLeagues = () => {
    const [leagues, setLeagues] = useState<League[]>([])
    let leagueAux:League[]=[]

    useEffect(() => { loadLeagues()}, [])
    
    const loadLeagues = async ()=>{

        //const leagueResponse:LeagueResponse = leaguesAPI
        const leagueResponse:LeagueResponse= await getLeagues();
        console.log(JSON.stringify(leagueResponse))
        
        if(leagueResponse.data.length>0){
            for (let i=0; i<leagueResponse.data.length; i++){
                leagueAux.push(leagueResponse.data[i].attributes as League)
            }
        }
        setLeagues(leagueAux)
    }

    return {
        leagues, 
        loadLeagues
    }
}
