import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import numberBoxSlice from '../features/numberBox/numberBoxSlice';
import saga from '../middlewares/saga';

//?? let
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    numberBox: numberBoxSlice.reducer,
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;