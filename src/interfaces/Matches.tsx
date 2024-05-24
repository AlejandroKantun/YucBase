export interface MatchesByWeekNumber{
    gameWeekNumber:number,
    matches:Match[]
}
export interface Match{
        matchID:number,
        localTeamID:number,
        localTeamName:string,
        visitTeamID:number,
        visitTeamName:string,
        localScoreRuns?:string,
        visitScoreRuns?:string,
        localScoreHits?:string,
        visitScoreHits?:string,
        localScoreErrors?:string,
        visitScoreErrors?:string,
        matchStatus?:string,
        localField?:string,
        fieldGPS?:string,
        fieldAddress?:string,
        alternativeFieldAddress?:string,
        gameType?:string,
        
}