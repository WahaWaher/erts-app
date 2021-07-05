import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMidleware from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { rootReducer } from '@/store/reducers/index';
import { FC } from 'react';

export type AppState = ReturnType<typeof rootReducer>;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMidleware))
);

export const persistor = persistStore(store);

export const AppStore: FC = ({ children, ...props }) => (
  <ReduxProvider store={store} {...props}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </ReduxProvider>
);
