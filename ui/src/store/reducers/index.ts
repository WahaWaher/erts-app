import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { electronStorage } from '@/store/electronStorage';
import { commonReducer } from '@/store/reducers/commonReducer';

const config = {
  common: {
    key: 'common',
    storage: electronStorage,
    blacklist: ['_persist'],
    serialize: false,
  },
};

export const rootReducer = combineReducers({
  /* @ts-ignore */
  common: persistReducer(config.common, commonReducer) as typeof commonReducer,
});
