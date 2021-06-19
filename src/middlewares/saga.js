import { callAPI } from "../api/axios";
import { take,call, fork, put, takeLatest } from "redux-saga/effects";
import { fetchMyNumber } from "../features/numberBox/numberBoxSlice";
import { numberBoxSagaAction } from "../features/numberBox/numberBoxSagaAction";
import io from 'socket.io-client';
import { eventChannel } from "redux-saga";


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

function putMyNumber(actionPut){
  console.log(`before call put ${actionPut.payload} to API` , process.env.REACT_APP_URL);
  try {
      
      // let result = yield call(() => callAPI({            
      //         url: process.env.REACT_APP_URL,
      //         method: 'put',
      //         data:{value: actionPut.payload}
      //         })
      // );
      // console.log(result.data.message);   
     

    } catch (e) {
      console.log('catch error put !!')
    }

} 


function connect() {
  console.log("client start to connect !")

  //const socket = io.connect('http://localhost:4123/', {reconnection: false});
  const socket = io("http://localhost:3003",{reconnection: false});

  socket.on('connect_failed', function(){
    console.log('client: Connection Failed ');
});

  console.log(socket);
  return new Promise(resolve => {
     socket.on('connect', () => {
    resolve(socket);
   console.log("Client: Socket finish connected");
     });
  });
};

function connect2() {
  const socket = io('http://localhost:3003');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log("Client: Socket finish connected");
    });
  });
}



function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('server-send-num', ({ num }) => {
      console.log('C: get  a   get-num !!!',num);
      emit(fetchMyNumber(num));
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
};

function* flow() {
  // yield take(GET_TODOS)
   const socket = yield call(connect2);

    yield fork(read, socket);
    socket.emit('client-update-num',{id:'60a6666fbdb08120a8071cb5', value:1000});

  // yield fork(write, socket)
 }

  
  export default function* rootSaga() {
    yield fork(flow);
    
    yield takeLatest(numberBoxSagaAction.GET_MY_NUMBER_SAGA, getMyNumber);
    const actionPut = yield takeLatest(numberBoxSagaAction.PUT_MY_NUMBER_SAGA, putMyNumber);

  }

