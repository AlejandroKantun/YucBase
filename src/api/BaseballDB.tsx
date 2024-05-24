import axios, { AxiosInstance, AxiosResponse } from "axios";
import globalSettings from '../globalSettings';
import { League, LeagueResponse } from '../interfaces/LeagueResponse';
import { MatchesTournamentsResponse } from "../interfaces/MatchesTournamentsResponse";
import { TeamsTournamentsResponse } from "../interfaces/TeamsTournamentsResponse";
import { TournamentsResponse, Tournament } from '../interfaces/TournamentsResponse';

const baseballDB=axios.create({
    //baseURL:globalSettings.API.devEndPoint //levy house
    baseURL:globalSettings.API.prodEndPoint

    });

export default baseballDB;


export const getLeagues =async ():Promise<LeagueResponse>=>{
        const response = await baseballDB.get<LeagueResponse>('/leagues?fields[league]=id,category,gender,location,logo_url,name')
        return response.data
} 

export const getTournamentsByLeagueId =async (League:League,desc=true):Promise<TournamentsResponse>=>{
    const sortType= desc?'-':'';
    const response = await baseballDB.get<TournamentsResponse>(`/leagues/${League.id}/tournaments?fields[tournament]=id,name,start_date,status,league_id,number_of_teams&sort=${sortType}start_date`)
    return response.data
} 

export const getTeamsTournamentsByTournamentId =async (tournament:Tournament):Promise<TeamsTournamentsResponse>=>{  
    
    const response = await baseballDB.get<TeamsTournamentsResponse>(`/tournaments/${tournament?.id}/tournament_teams?fields[tournament_team]=id,average,lost_games,played_games,position,tied_games,won_games,zone,team,tournament&fields[team]=id,name,location,field_name,field_address,field_map_url,logo_url&fields[tournament]=id,name,start_date,status,league_id,number_of_teams&include=team,tournament`)
    return response.data
} 


export const getMatchesByTournamentId =async (tournament:Tournament):Promise<MatchesTournamentsResponse>=>{  
    
    const response = await baseballDB.get<MatchesTournamentsResponse>(`/tournaments/${tournament?.id}/matches?fields[match]=id,comments,field_address,field_map_url,field_name,game_date,game_week_mumber,local_errors,local_hits,visitor_errors,visitor_hits,local_team_id,tournament_id,visitor_team_id,total_hits,tournament,visitor_team,local_team,total_local_innings,total_visitor_innings&include=tournament,visitor_team,local_team`)
    return response.data
} 
