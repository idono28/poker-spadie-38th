import { Tournament } from '@/types/tournament';
import tournamentsData from '@/data/tournaments.json';

export function getTournaments(): Tournament[] {
  return tournamentsData as Tournament[];
}

export function groupTournamentsByDate(tournaments: Tournament[]) {
  const grouped = tournaments.reduce((acc, tournament) => {
    const date = tournament.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(tournament);
    return acc;
  }, {} as Record<string, Tournament[]>);

  return grouped;
}