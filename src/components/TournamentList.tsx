'use client';

import { Tournament } from '@/types/tournament';
import TournamentCard from './TournamentCard';

interface TournamentListProps {
  tournaments: Tournament[];
  groupedByDate: Record<string, Tournament[]>;
}

export default function TournamentList({ tournaments, groupedByDate }: TournamentListProps) {
  const dates = Object.keys(groupedByDate).sort();

  return (
    <div className="space-y-8">
      {dates.map(date => (
        <div key={date} className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            {date}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedByDate[date]
              .sort((a, b) => a.start_time.localeCompare(b.start_time))
              .map((tournament, index) => (
                <TournamentCard key={`${tournament.id}-${index}`} tournament={tournament} />
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}