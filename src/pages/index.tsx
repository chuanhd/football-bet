import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FixtureRow from '../modules/fixture/components/fixtures/fixtureRow';
import * as fixtureOperators from '../modules/fixture/redux/operators';
import { FixtureState } from '../modules/fixture/redux/states';
import { RootState, AppDispatch } from '../shared/utils/TypesDeclarations';

interface FixturesListPageProps extends fixtureOperators.IFixtureOperations {
  matches: FixtureState;
}

const FixturesListPage = function IndexPage(props: FixturesListPageProps) {
  const [numOfNextFixtures] = useState(10);

  const { matches, fetchNextFixtures } = props;

  useEffect(() => {
    fetchNextFixtures(numOfNextFixtures);
  }, [fetchNextFixtures, numOfNextFixtures]);

  return (
    <div>
      <h2> Next {numOfNextFixtures} fixtures of Premier League</h2>
      <div>
        {matches.nextFixtures.map((match) => (
          <FixtureRow key={match.fixture.id} match={match} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ matches: state.fixture });

function mapActionCreatorsToProps(dispatch: AppDispatch) {
  return bindActionCreators(
    {
      ...fixtureOperators,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(FixturesListPage);
