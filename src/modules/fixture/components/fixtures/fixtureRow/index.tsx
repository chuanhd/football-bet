import Fixture from '../../../models/fixture.model';

interface IFixtureRowProps {
  fixture: Fixture;
}

const FixtureRow = function FixtureRow(props: IFixtureRowProps) {
  const { fixture } = props;
  const [homeTeam, awayTeam] = fixture.teams;

  return (
    <div>
      <img src={homeTeam.logo} alt="home team logo" />
      <img src={awayTeam.logo} alt="away team logo" />
    </div>
  );
};

export default FixtureRow;
