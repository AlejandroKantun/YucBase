
export interface TeamsTournamentsResponse {
    data:     Data[];
    included: Included[];
}

export interface Data {
    id:            string;
    type:          string;
    attributes:    TeamTournament;
    relationships: Relationships;
}

export interface TeamTournament {
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
    team:       DataRelationship;
    tournament: DataRelationship;
}

export interface DataRelationship {
    data: DataType;
}

export interface DataType {
    id:   string;
    type: string;
}

export interface Included {
    id:         string;
    type:       string;
    attributes: Attributes;
}

export interface Attributes {
    id:               string;
    name:             string;
    location?:        string;
    field_name?:      string;
    field_address?:   string;
    field_map_url?:   string;
    logo_url?:        string;
    start_date?:      Date | string;
    status?:          string;
    league_id?:       string;
    number_of_teams?: number;
}