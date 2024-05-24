export interface MatchesTournamentsResponse {
    data:     Data[];
    included: Included[];
}

export interface Data {
    id:            string;
    type:          string;
    attributes:    MatchTournament;
    relationships: Relationships;
}

export interface MatchTournament {
    id:               string;
    comments:         null;
    field_address:    null;
    field_map_url:    null;
    field_name:       null;
    game_date:        Date|string;
    game_week_mumber: number;
    local_errors:     number;
    local_hits:       number;
    visitor_errors:   number;
    visitor_hits:     number;
    local_team_id:    string;
    tournament_id:    string;
    visitor_team_id:  string;
    total_hits:       number;
    total_local_innings?: number|null,
    total_visitor_innings?: number|null,
}

export interface Relationships {
    tournament:   LocalTeam;
    visitor_team: LocalTeam;
    local_team:   LocalTeam;
}

export interface LocalTeam {
    data: DataType;
}

export interface DataType {
    id:   string;
    type: string;
}

export enum entityType {
    Team = "team",
    Tournament = "tournament",
}

export interface Included {
    id:         string;
    type:       string;
    attributes: IncludedAttributes;
}

export interface IncludedAttributes {
    id:               string;
    name:             string;
    start_date?:      Date|string;
    status?:          string;
    league_id?:       string;
    number_of_teams?: number;
    location?:        string;
    field_name?:      string;
    field_address?:   string;
    field_map_url?:   string;
    logo_url?:        string;
}
