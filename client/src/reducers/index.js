import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  whitelist: ['userReducer'],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
