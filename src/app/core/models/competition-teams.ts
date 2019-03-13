export interface CompetitionTeams {
    count: number;
    filters: Filters;
    competition: Competition;
    season: Season;
    teams: TeamsItem[];
}

interface Filters {
}
interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
}
interface Area {
    id: number;
    name: string;
}
interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
}
interface TeamsItem {
    id: number;
    area: Area;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
}
