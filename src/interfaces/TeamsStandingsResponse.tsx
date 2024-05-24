export interface TeamStandingsResponse {
    data:     Data[];
    included: Included[];
}

export interface Data {
    id:            string;
    type:          string;
    attributes:    TournamentTeam;
    relationships: Relationships;
}

export interface TournamentTeam {
    id:           string;
    average:      string;
    lost_games:   number;
    played_games: number;
    position:     null;
    tied_games:   number;
    won_games:    number;
    zone:         null;
}

export interface Relationships {
    team:       Entity;
    tournament: Entity;
}

export interface Entity {
    data: Data;
}

export interface Data {
    id:   string;
    type: string;
}

export interface Included {
    id:         string;
    type:       string;
    attributes: IncludedAttributes;
}

export interface IncludedAttributes {
    id:               string;
    name:             string;
    location?:        string;
    field_name?:      string;
    field_address?:   string;
    field_map_url?:   string;
    logo_url?:        string;
    start_date?:      Date;
    status?:          string;
    league_id?:       string;
    number_of_teams?: number;
}