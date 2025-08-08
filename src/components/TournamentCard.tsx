'use client';

import { Tournament } from '@/types/tournament';

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const isMainEvent = tournament.name.includes('Main Event');
  const isChampionship = tournament.name.includes('Championship');
  const isSupernova = tournament.name.includes('Supernova');
  
  const getCardStyle = () => {
    if (isSupernova) return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
    if (isChampionship) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black';
    if (isMainEvent) return 'bg-gradient-to-r from-blue-500 to-blue-700 text-white';
    return 'bg-white border border-gray-200';
  };

  const formatTime = (time: string) => {
    if (time === '-') return '-';
    return time;
  };

  return (
    <div className={`rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ${getCardStyle()}`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-1 ${isMainEvent || isSupernova ? 'text-white' : 'text-gray-800'}`}>
            {tournament.name}
          </h3>
          <p className={`text-sm ${isMainEvent || isSupernova ? 'text-gray-200' : 'text-gray-600'}`}>
            ID: {tournament.id}
          </p>
        </div>
        <div className={`text-right text-sm ${isMainEvent || isSupernova ? 'text-gray-200' : 'text-gray-600'}`}>
          <div>開始: {formatTime(tournament.start_time)}</div>
          <div>登録終了: {formatTime(tournament.reg_close)}</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div>
          <span className={`text-sm ${isMainEvent || isSupernova ? 'text-gray-300' : 'text-gray-500'}`}>参加費</span>
          <p className={`font-semibold ${isMainEvent || isSupernova ? 'text-white' : 'text-gray-800'}`}>
            {tournament.entry_fee}
          </p>
        </div>
        <div>
          <span className={`text-sm ${isMainEvent || isSupernova ? 'text-gray-300' : 'text-gray-500'}`}>チップス</span>
          <p className={`font-semibold ${isMainEvent || isSupernova ? 'text-white' : 'text-gray-800'}`}>
            {tournament.chips}
          </p>
        </div>
      </div>
    </div>
  );
}