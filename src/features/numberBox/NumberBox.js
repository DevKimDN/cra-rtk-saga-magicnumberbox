import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { numberBoxSagaAction } from './numberBoxSagaAction';

function NumberBox(){
  const myNumber = useSelector(state => state.numberBox.myNumber);
  const dispatch = useDispatch();
  const getMyNumberAction = {type: numberBoxSagaAction.GET_MY_NUMBER_SAGA };

const handleButtonGetClick = ()=>{
  console.log('click !');
  dispatch({type: numberBoxSagaAction.GET_MY_NUMBER_SAGA });
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
      </div>
     
  );
}

export default NumberBox;
