export interface CompetitionStandings {
    filters: Filters;
    competition: Competition;
    season: Season;
    standings: StandingsItem[];
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
interface StandingsItem {
    stage: string;
    type: string;
    group: null;
    table: TableItem[];
}
interface TableItem {
    position: number;
    team: Team;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}
interface Team {
    id: number;
    name: string;
    crestUrl: string;
}
