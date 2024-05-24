import EncryptedStorage from 'react-native-encrypted-storage';
import { Tournament } from '../interfaces/TournamentsResponse';

const sessionName = 'userTournamentSelection'

export async function storeFavoriteTournament(tournament:Tournament){
    try {

        console.log('saving information...'),
        await EncryptedStorage.setItem(
            sessionName,
            JSON.stringify({
                leagueAdminID:tournament.league_id,
                tournamendId:tournament.id,
                tournamentName:tournament.name,
            })
        );        
        console.log('saved')

    } catch (error) {
        console.log('There was an error while saving preferences: ' + tournament.name)

    }

}


export async function retrieveFavoriteTournament():Promise<string|null> {
    var result:string | null = '';
    try {   
        const session = await EncryptedStorage.getItem(sessionName);
    
        if (session !== undefined) {
            result=session;
            console.log(session)
        }
        return result;

    } catch (error) {
        console.log('There was an error while retrieving favoriteTournament ');
        return result;

    }

}