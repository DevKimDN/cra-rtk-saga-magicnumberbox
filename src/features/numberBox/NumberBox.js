import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { numberBoxSagaAction } from './numberBoxSagaAction';

function NumberBox(){
  const myNumber = useSelector(state => state.numberBox.myNumber);
  const dispatch = useDispatch();

  //const  inputValue= document.getElementById("inputBox").value;
  const getMyNumberAction = {type: numberBoxSagaAction.GET_MY_NUMBER_SAGA };
  const putMyNumberAction =(number) => {return {
    type: numberBoxSagaAction.PUT_MY_NUMBER_SAGA, 
    payload: number
  }};

const handleButtonGetClick = ()=>{
  console.log('get click !');
  dispatch(getMyNumberAction);
};
const handleButtonPutClick = ()=>{
  const inputValue = document.getElementById("inputBox").value
  console.log('put click ! ', inputValue  );
  dispatch(putMyNumberAction(inputValue));
};

  return (
    <div>
       <button
          className="buttonGetMyNumber"
          onClick={handleButtonGetClick}
        >
        get My Number
        </button>
        <p>{myNumber}</p>


        <input type="text" id="inputBox" placeholder="type a number"
        ></input>


        <button
          className="buttonPutMyNumber"
          onClick={handleButtonPutClick}
        >
        put My Number
        </button>

      </div>
     
  );
}

export default NumberBox;
