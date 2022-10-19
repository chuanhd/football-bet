import { configureStore } from '@reduxjs/toolkit';
import fixture from '../../../modules/fixture/redux/reducer';

const reducers = {
  fixture,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
