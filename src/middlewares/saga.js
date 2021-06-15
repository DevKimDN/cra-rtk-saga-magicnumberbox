import { callAPI } from "../api/axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMyNumber } from "../features/numberBox/numberBoxSlice";
import { numberBoxSagaAction } from "../features/numberBox/numberBoxSagaAction";


function* getMyNumber(){
    console.log('before call get API' , process.env.REACT_APP_URL);
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


function* putMyNumber(actionPut){
  console.log(`before call put ${actionPut.payload} to API` , process.env.REACT_APP_URL);
  try {
      
      let result = yield call(() => callAPI({            
              url: process.env.REACT_APP_URL,
              method: 'put',
              data:{value: actionPut.payload}
              })
      );
      console.log(result.data.message);   
    } catch (e) {
      console.log('catch error put !!')
    }

} 


  
  export default function* rootSaga() {
    yield takeLatest(numberBoxSagaAction.GET_MY_NUMBER_SAGA, getMyNumber);
    const actionPut = yield takeLatest(numberBoxSagaAction.PUT_MY_NUMBER_SAGA, putMyNumber);
  }

