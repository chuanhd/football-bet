import store from '../infra/redux/configureStore';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
