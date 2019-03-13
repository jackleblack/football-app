export interface CompetitionMatches {
    count: number;
    filters: Filters;
    competition: Competition;
    matches: MatchesItem[];
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
interface MatchesItem {
    id: number;
    season: Season;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string;
    lastUpdated: string;
    score: Score;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    referees: RefereesItem[];
}
interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
}
interface Score {
    winner: string | null;
    duration: string;
    fullTime: FullTime;
    halfTime: HalfTime;
    extraTime: ExtraTime;
    penalties: Penalties;
}
interface FullTime {
    homeTeam: number | null;
    awayTeam: number | null;
}
interface HalfTime {
    homeTeam: number | null;
    awayTeam: number | null;
}
interface ExtraTime {
    homeTeam: null;
    awayTeam: null;
}
interface Penalties {
    homeTeam: null;
    awayTeam: null;
}
interface HomeTeam {
    id: number;
    name: string;
}
interface AwayTeam {
    id: number;
    name: string;
}
interface RefereesItem {
    id: number;
    name: string;
    nationality: null;
}
