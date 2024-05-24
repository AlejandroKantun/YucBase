import { MatchesByWeekNumber } from "../interfaces/Matches"
import { Tournament } from "../interfaces/Tournament"
import { LeagueResponse } from '../interfaces/LeagueResponse';

export const matchesByWeekData:MatchesByWeekNumber[]=[
    {
    "gameWeekNumber":1,
    "matches":[{
                "matchID":1,
                "localTeamID":1,
                "localTeamName":"LocalTeam Example",
                "visitTeamID":2,
                "visitTeamName":"VisitTeam Example",
                "localScoreRuns":"12",
                "visitScoreRuns":"10",
                },
                {
                    "matchID":2,
                    "localTeamID":3,
                    "localTeamName":"LocalTeam Example",
                    "visitTeamID":4,
                    "visitTeamName":"VisitTeam Example",
                    "localScoreRuns":"12",
                    "visitScoreRuns":"10",
                    },
              ]
    },
    {
        "gameWeekNumber":2,
        "matches":[{
                    "matchID":1,
                    "localTeamID":1,
                    "localTeamName":"LocalTeam Example",
                    "visitTeamID":2,
                    "visitTeamName":"VisitTeam Example",
                    "localScoreRuns":"12",
                    "visitScoreRuns":"10",
                    },
                    {
                        "matchID":2,
                        "localTeamID":3,
                        "localTeamName":"LocalTeam Example",
                        "visitTeamID":4,
                        "visitTeamName":"VisitTeam Example",
                        "localScoreRuns":"12",
                        "visitScoreRuns":"10",
                        },
                  ]
        },
]

export const tournamentData:Tournament[]=[
    {
        "tournamendId":1,
        "leagueAdminID":1,
        "tournamentName":"Liga de Beisbol Alberto Quintal Grupo B",
        "year":"2023",
        "locationName":"Yucatán",
        "category":"Abierta - segunda fuerza",
        "gender":"Masculino",
        "logoURL":"",
        "status":"In progress"
    },
    {
        "tournamendId":2,
        "leagueAdminID":1,
        "tournamentName":"Liga de Beisbol Alberto Quintal Grupo A",
        "year":"2023",
        "locationName":"Yucatán",
        "category":"Abierta - segunda fuerza",
        "gender":"Masculino",
        "logoURL":"",
        "status":"In progress"

    },
    {
        "tournamendId":3,
        "leagueAdminID":1,
        "tournamentName":"Torneo Rápido Febrero",
        "year":"2024",
        "locationName":"Yucatán",
        "category":"Abierta - segunda fuerza",
        "gender":"Masculino",
        "logoURL":"",
        "status":"In progress"

    },
]

export const leaguesAPI:LeagueResponse={
    "data": [
        {
            "id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
            "type": "league",
            "attributes": {
                "id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "category": "Segunda Fuerza",
                "gender": "male",
                "location": "Kinchil",
                "logo_url": "https://drive.google.com/uc?export=download&id=1GSMvc7w7JW42jdEnnzA_KJhyMFSl85aj",
                "name": "Liga De Beisbol Alberto Quintal"
            }
        },
        {
            "id": "61791cb9-b481-4f6c-8d5a-38ade3061eea",
            "type": "league",
            "attributes": {
                "id": "61791cb9-b481-4f6c-8d5a-38ade3061eea",
                "category": "Segunda Fuerza",
                "gender": "male",
                "location": "Kinchil",
                "logo_url": "https://drive.google.com/uc?export=download&id=1BYESngqHFkaLNU1QgBWqX5u7aTCvAMk6",
                "name": "Liga Estatal Yucateca de Beisbol"
            }
        },
        {
            "id": "232d957b-744f-464b-8059-42d8ed250fd5",
            "type": "league",
            "attributes": {
                "id": "232d957b-744f-464b-8059-42d8ed250fd5",
                "category": "Segunda Fuerza",
                "gender": "male",
                "location": "Kinchil",
                "logo_url": "https://ligayucatan.org/assets/logos/logo.png",
                "name": "Liga Infantil y Juvenil de Béisbol Yucatán A.C."
            }
        }
    ]
}

export const tournamentsAPI=
{
    "data": [
        {
            "id": "ce26b1ff-3e90-4ad3-886a-972372cf0f56",
            "type": "tournament",
            "attributes": {
                "id": "ce26b1ff-3e90-4ad3-886a-972372cf0f56",
                "name": "Torneo 2024",
                "start_date": "2024-03-10",
                "status": "in_progress",
                "league_id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "number_of_teams": 0
            }
        },
        {
            "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
            "type": "tournament",
            "attributes": {
                "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "name": "Torneo Rápido Enero",
                "start_date": "2024-01-06",
                "status": "in_progress",
                "league_id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "number_of_teams": 3
            }
        }
    ]
}

export const TeamsTournamentsAPI={
    "data": [
        {
            "id": "ee7e414d-b3c5-4778-837a-a608e6e74e5f",
            "type": "tournament_team",
            "attributes": {
                "id": "ee7e414d-b3c5-4778-837a-a608e6e74e5f",
                "average": "0.6",
                "lost_games": 3,
                "played_games": 7,
                "position": null,
                "tied_games": 1,
                "won_games": 3,
                "zone": null
            },
            "relationships": {
                "team": {
                    "data": {
                        "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                        "type": "team"
                    }
                },
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                }
            }
        },
        {
            "id": "38e08bfc-e284-4c4a-89d1-1f2accfab2ab",
            "type": "tournament_team",
            "attributes": {
                "id": "38e08bfc-e284-4c4a-89d1-1f2accfab2ab",
                "average": "0.6",
                "lost_games": 4,
                "played_games": 8,
                "position": null,
                "tied_games": 1,
                "won_games": 3,
                "zone": null
            },
            "relationships": {
                "team": {
                    "data": {
                        "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                        "type": "team"
                    }
                },
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                }
            }
        },
        {
            "id": "ce5f3c71-4557-49be-9b22-cde4e334e8ce",
            "type": "tournament_team",
            "attributes": {
                "id": "ce5f3c71-4557-49be-9b22-cde4e334e8ce",
                "average": "0.6",
                "lost_games": 4,
                "played_games": 9,
                "position": null,
                "tied_games": 2,
                "won_games": 3,
                "zone": null
            },
            "relationships": {
                "team": {
                    "data": {
                        "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                        "type": "team"
                    }
                },
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                }
            }
        }
    ],
    "included": [
        {
            "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
            "type": "team",
            "attributes": {
                "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "name": "Cerveceros",
                "location": "Samahil",
                "field_name": "Victor Cervera Pacheco",
                "field_address": "97397 Samahil, Yuc.TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
            "type": "tournament",
            "attributes": {
                "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "name": "Torneo Rápido Enero",
                "start_date": "2024-01-06",
                "status": "in_progress",
                "league_id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "number_of_teams": 3
            }
        },
        {
            "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
            "type": "team",
            "attributes": {
                "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "name": "Seleccion Lara",
                "location": "TBD",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
            "type": "team",
            "attributes": {
                "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "name": "Rojos",
                "location": "Dzucacab",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        }
    ]
}

export const TeamsTournamentsResponse={
    "data": [
        {
            "id": "3fd68aa8-5de0-49c0-aebf-823175175894",
            "type": "match",
            "attributes": {
                "id": "3fd68aa8-5de0-49c0-aebf-823175175894",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 2,
                "local_hits": 2,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "total_hits": 2
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "aa9b6788-a84a-4d01-b510-9f6b2717178a",
            "type": "match",
            "attributes": {
                "id": "aa9b6788-a84a-4d01-b510-9f6b2717178a",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 1,
                "local_hits": 3,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "total_hits": 3
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "cea7bce3-02fe-4f29-bbe6-70d8b386655f",
            "type": "match",
            "attributes": {
                "id": "cea7bce3-02fe-4f29-bbe6-70d8b386655f",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 0,
                "local_hits": 1,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "13d57a61-8639-4345-9f67-9273203fecca",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                "total_hits": 1
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "13d57a61-8639-4345-9f67-9273203fecca",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "ada144a2-aadd-4985-9660-acad9d1a3404",
            "type": "match",
            "attributes": {
                "id": "ada144a2-aadd-4985-9660-acad9d1a3404",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 0,
                "local_hits": 0,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                "total_hits": 0
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "a4db8317-f449-4d8b-b434-1909ee65020f",
            "type": "match",
            "attributes": {
                "id": "a4db8317-f449-4d8b-b434-1909ee65020f",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-11",
                "game_week_mumber": 2,
                "local_errors": 2,
                "local_hits": 2,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "total_hits": 2
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "3fb21cd1-a09d-47ad-804f-1e81c82328ab",
            "type": "match",
            "attributes": {
                "id": "3fb21cd1-a09d-47ad-804f-1e81c82328ab",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-11",
                "game_week_mumber": 2,
                "local_errors": 1,
                "local_hits": 3,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "total_hits": 3
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                        "type": "team"
                    }
                }
            }
        }
    ],
    "included": [
        {
            "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
            "type": "tournament",
            "attributes": {
                "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "name": "Torneo Rápido Enero",
                "start_date": "2024-01-06",
                "status": "in_progress",
                "league_id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "number_of_teams": 3
            }
        },
        {
            "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
            "type": "team",
            "attributes": {
                "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "name": "Seleccion Lara",
                "location": "TBD",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
            "type": "team",
            "attributes": {
                "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "name": "Cerveceros",
                "location": "Samahil",
                "field_name": "Victor Cervera Pacheco",
                "field_address": "97397 Samahil, Yuc.TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
            "type": "team",
            "attributes": {
                "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "name": "Bravoz",
                "location": "Tahdzibichen",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
            "type": "team",
            "attributes": {
                "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "name": "Rojos",
                "location": "Dzucacab",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
            "type": "team",
            "attributes": {
                "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                "name": "Angeles",
                "location": "Umán",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "13d57a61-8639-4345-9f67-9273203fecca",
            "type": "team",
            "attributes": {
                "id": "13d57a61-8639-4345-9f67-9273203fecca",
                "name": "Piratas",
                "location": "TDB",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
            "type": "team",
            "attributes": {
                "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                "name": "Sultanes",
                "location": "Sacalum",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
            "type": "team",
            "attributes": {
                "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                "name": "Broncos",
                "location": "TDB",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        }
    ]
}

export const MatchesTournamentsAPI={
    "data": [
        {
            "id": "3fd68aa8-5de0-49c0-aebf-823175175894",
            "type": "match",
            "attributes": {
                "id": "3fd68aa8-5de0-49c0-aebf-823175175894",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 2,
                "local_hits": 2,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "total_hits": 2
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "aa9b6788-a84a-4d01-b510-9f6b2717178a",
            "type": "match",
            "attributes": {
                "id": "aa9b6788-a84a-4d01-b510-9f6b2717178a",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 1,
                "local_hits": 3,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "total_hits": 3
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "cea7bce3-02fe-4f29-bbe6-70d8b386655f",
            "type": "match",
            "attributes": {
                "id": "cea7bce3-02fe-4f29-bbe6-70d8b386655f",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 0,
                "local_hits": 1,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "13d57a61-8639-4345-9f67-9273203fecca",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                "total_hits": 1
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "13d57a61-8639-4345-9f67-9273203fecca",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "ada144a2-aadd-4985-9660-acad9d1a3404",
            "type": "match",
            "attributes": {
                "id": "ada144a2-aadd-4985-9660-acad9d1a3404",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-04",
                "game_week_mumber": 1,
                "local_errors": 0,
                "local_hits": 0,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                "total_hits": 0
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "a4db8317-f449-4d8b-b434-1909ee65020f",
            "type": "match",
            "attributes": {
                "id": "a4db8317-f449-4d8b-b434-1909ee65020f",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-11",
                "game_week_mumber": 2,
                "local_errors": 2,
                "local_hits": 2,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "total_hits": 2
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                        "type": "team"
                    }
                }
            }
        },
        {
            "id": "3fb21cd1-a09d-47ad-804f-1e81c82328ab",
            "type": "match",
            "attributes": {
                "id": "3fb21cd1-a09d-47ad-804f-1e81c82328ab",
                "comments": null,
                "field_address": null,
                "field_map_url": null,
                "field_name": null,
                "game_date": "2024-05-11",
                "game_week_mumber": 2,
                "local_errors": 1,
                "local_hits": 3,
                "visitor_errors": 0,
                "visitor_hits": 0,
                "local_team_id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "tournament_id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "visitor_team_id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "total_hits": 3
            },
            "relationships": {
                "tournament": {
                    "data": {
                        "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                        "type": "tournament"
                    }
                },
                "visitor_team": {
                    "data": {
                        "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                        "type": "team"
                    }
                },
                "local_team": {
                    "data": {
                        "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                        "type": "team"
                    }
                }
            }
        }
    ],
    "included": [
        {
            "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
            "type": "tournament",
            "attributes": {
                "id": "7ef3b7cc-92e9-4139-9fce-d24ec05c2366",
                "name": "Torneo Rápido Enero",
                "start_date": "2024-01-06",
                "status": "in_progress",
                "league_id": "836c9ff9-d438-49b9-9b17-82dd8b30c2c8",
                "number_of_teams": 3
            }
        },
        {
            "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
            "type": "team",
            "attributes": {
                "id": "3cb06c49-5dbc-4ace-a388-c1af80d1e2f8",
                "name": "Seleccion Lara",
                "location": "TBD",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": "https://drive.google.com/uc?export=download&id=1vipRVA-hdL24ELsRpBg6YAPz3dSyFJx0"
            }
        },
        {
            "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
            "type": "team",
            "attributes": {
                "id": "c9a03a84-f14c-42f1-bddd-12b79b3218d3",
                "name": "Cerveceros",
                "location": "Samahil",
                "field_name": "Victor Cervera Pacheco",
                "field_address": "97397 Samahil, Yuc.TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": "https://drive.google.com/uc?export=download&id=1vipRVA-hdL24ELsRpBg6YAPz3dSyFJx0"
            }
        },
        {
            "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
            "type": "team",
            "attributes": {
                "id": "dfe405b3-0bac-4032-860e-1d9d5aea14d9",
                "name": "Bravoz",
                "location": "Tahdzibichen",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
            "type": "team",
            "attributes": {
                "id": "44cde2a6-44fd-42ea-8dfd-ecbb8a448a41",
                "name": "Rojos",
                "location": "Dzucacab",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": "https://drive.google.com/uc?export=download&id=1YtWJuEjVQjZFnEw_8K4MGRWBg3DIAngT"
            }
        },
        {
            "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
            "type": "team",
            "attributes": {
                "id": "603a8b2b-cec8-4b0f-ac4d-c512f3da0caa",
                "name": "Angeles",
                "location": "Umán",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": "https://drive.google.com/uc?export=download&id=1vipRVA-hdL24ELsRpBg6YAPz3dSyFJx0"
            }
        },
        {
            "id": "13d57a61-8639-4345-9f67-9273203fecca",
            "type": "team",
            "attributes": {
                "id": "13d57a61-8639-4345-9f67-9273203fecca",
                "name": "Piratas",
                "location": "TDB",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
            "type": "team",
            "attributes": {
                "id": "edf2d4b9-59ab-4dcd-b250-6a6089f78b81",
                "name": "Sultanes",
                "location": "Sacalum",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": ""
            }
        },
        {
            "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
            "type": "team",
            "attributes": {
                "id": "26c8f862-fd9c-4407-8345-f203c76ab1ee",
                "name": "Broncos",
                "location": "TDB",
                "field_name": "TBD",
                "field_address": "TBD",
                "field_map_url": "https://maps.app.goo.gl/b4mNCY3N9C95KpiT6",
                "logo_url": "https://drive.google.com/uc?export=download&id=1YtWJuEjVQjZFnEw_8K4MGRWBg3DIAngT"
            }
        }
    ]
}