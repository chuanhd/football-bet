import Match from '../../../models/match.model';

interface IFixtureRowProps {
  match: Match;
}

const FixtureRow = function FixtureRow(props: IFixtureRowProps) {
  const { match } = props;
  const { home: homeTeam, away: awayTeam } = match.teams;

  return (
    <div>
      <img src={homeTeam.logo} alt="home team logo" />
      <img src={awayTeam.logo} alt="away team logo" />
    </div>
  );
};

export default FixtureRow;
