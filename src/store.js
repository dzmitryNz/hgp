import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './components/shared/redux/slicer';
// import rootReducer from './components/shared/redux/reducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
