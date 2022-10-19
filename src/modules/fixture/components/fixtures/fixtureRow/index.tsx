import Match from '../../../models/match.model';
import './style.sass';

interface IFixtureRowProps {
  match: Match;
}

const FixtureRow = function FixtureRow(props: IFixtureRowProps) {
  const { match } = props;
  const { home: homeTeam, away: awayTeam } = match.teams;

  return (
    <div className="match-row">
      <div className="home-team-container">
        <img className="team-logo" src={homeTeam.logo} alt="home team logo" />
        <h3 className="team-name">{homeTeam.name}</h3>
        <button type="button">Bet for {homeTeam.name} win</button>
      </div>
      <div className="match-time-container">
        <p>{match.fixture.hour}</p>
        <p>{match.fixture.date}</p>
        <button type="button">Bet for draw</button>
      </div>
      <div className="away-team-container">
        <img className="team-logo" src={awayTeam.logo} alt="away team logo" />
        <h3 className="team-name">{awayTeam.name}</h3>
        <button type="button">Bet for {awayTeam.name} win</button>
      </div>
    </div>
  );
};

export default FixtureRow;
