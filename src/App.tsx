import './App.css';
import { useTrucoStore } from './truco-store';

function App() {
  const reset = useTrucoStore((state) => state.reset);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ScoreBoard />
      <div className="flex flex-col border-2 border-slate-950 p-4 gap-5">
        <h2 className="text-2xl">Times</h2>
        <div className="flex flex-row gap-2">
          <TeamA />
          <TeamB />
        </div>
        <button onClick={reset}>Resetar</button>
      </div>
    </div>
  );
}

export const ScoreBoard = () => {
  // const { teamA, teamB } = useTrucoContext();
  const teamA = useTrucoStore((state) => state.teamA);
  const teamB = useTrucoStore((state) => state.teamB);
  return (
    <div className="w-52 h-52 flex items-center justify-center border-2 border-slate-950 p-2">
      {teamA === teamB ? 'Empate' : teamA > teamB ? 'Time A ' : 'Time B'}
    </div>
  );
};

const TeamA = () => {
  // const { teamA: team, incrementA: increment } = useTrucoContext();
  const team = useTrucoStore((state) => state.teamA);
  const increment = useTrucoStore((state) => state.incrementA);
  return <Team title="Time A" team={team} increment={increment} />;
};

const TeamB = () => {
  // const { teamB: team, incrementB: increment } = useTrucoContext();
  const team = useTrucoStore((state) => state.teamB);
  const increment = useTrucoStore((state) => state.incrementB);
  return <Team title="Time B" team={team} increment={increment} />;
};

const Team = ({ title, team, increment }: any) => {
  return (
    <div className="w-52 h-52 flex flex-col items-center justify-center border-2 border-slate-950 p-4">
      <h3 className="flex flex-col">
        {title}: <span className="text-3xl">{team}</span>
      </h3>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default App;
