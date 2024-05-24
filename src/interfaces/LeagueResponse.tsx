export interface LeagueResponse {
    data: Data[];
}

export interface Data {
    id:         string;
    type:       string;
    attributes: League;
}

export interface League {
    id:       string;
    category: string;
    gender:   string;
    location: string;
    logo_url: string;
    name:     string;
}