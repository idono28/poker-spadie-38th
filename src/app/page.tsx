import { getTournaments, groupTournamentsByDate } from '@/lib/tournaments';
import TournamentList from '@/components/TournamentList';

export default function Home() {
  const tournaments = getTournaments();
  const groupedTournaments = groupTournamentsByDate(tournaments);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            SPADIE 38th
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            ポーカートーナメント一覧
          </p>
          <p className="text-lg text-gray-500">
            全{tournaments.length}イベント
          </p>
        </header>
        
        <main>
          <TournamentList 
            tournaments={tournaments} 
            groupedByDate={groupedTournaments}
          />
        </main>
      </div>
    </div>
  );
}
