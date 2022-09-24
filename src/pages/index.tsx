import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FixtureRow from '../modules/fixture/components/fixtures/fixtureRow';
import * as fixtureOperators from '../modules/fixture/redux/operators';
import { FixtureState } from '../modules/fixture/redux/states';
import { RootState, AppDispatch } from '../shared/utils/TypesDeclarations';

interface FixturesListPageProps extends fixtureOperators.IFixtureOperations {
  fixtures: FixtureState;
}

const FixturesListPage = function IndexPage(props: FixturesListPageProps) {
  const [numOfNextFixtures] = useState(10);

  const { fixtures, fetchNextFixtures } = props;

  useEffect(() => {
    fetchNextFixtures(numOfNextFixtures);
  }, [numOfNextFixtures, fetchNextFixtures]);

  return (
    <div>
      <h2> Next {numOfNextFixtures} fixtures of Premier League</h2>
      <div>
        {fixtures.nextFixtures.map((fixture) => (
          <FixtureRow key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ fixtures: state.fixture });

function mapActionCreatorsToProps(dispatch: AppDispatch) {
  return bindActionCreators(
    {
      ...fixtureOperators,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(FixturesListPage);
