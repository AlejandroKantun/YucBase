export interface TournamentsResponse {
    data: Data[];
}

export interface Data {
    id:         string;
    type:       string;
    attributes: Tournament;
}

export interface Tournament {
    id:              string;
    name:            string;
    start_date:      string|Date;
    status:          string;
    league_id:       string;
    number_of_teams: number;
}