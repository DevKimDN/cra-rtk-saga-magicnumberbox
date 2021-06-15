import { callAPI } from "../api/axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { fetchMyNumber } from "../features/numberBox/numberBoxSlice";
import { numberBoxSagaAction } from "../features/numberBox/numberBoxSagaAction";




function* getMyNumber(){
    console.log('before call API' , process.env.REACT_APP_URL);
    try {
        
        let result = yield call(() =>
        callAPI({            
                url: process.env.REACT_APP_URL,
                method: 'get'
                })
        );
        yield put(fetchMyNumber(result.data.data.numX.value));
      } catch (e) {
        yield put({ type: "TODO_FETCH_FAILED" });
      }

} 
  
  export default function* rootSaga() {
    yield takeEvery(numberBoxSagaAction.GET_MY_NUMBER_SAGA, getMyNumber);
  }

