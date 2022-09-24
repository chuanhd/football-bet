/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './shared/infra/redux/configureStore';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
