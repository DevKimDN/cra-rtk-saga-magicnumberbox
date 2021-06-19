import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader'


ScanQR.propTypes = {
    delay: PropTypes.number,
    result: PropTypes.string,
}
ScanQR.defaultProps = {
    delay: 1000,
    result: 'No result',
}

const handleScan = (data)=> {if(data)alert(data)};
const handleError = (er)=> {console.log('qr-error: ',er);alert(er)};

function ScanQR(props) {
    const {delay,result} = props;
    return (
        <div style={{border: "1px solid blue"}}>
        <QrReader
          delay={delay}
          style= {{height: 320, width: 320, border : '2px solid blue'}}
         onError={handleError}
         onScan={handleScan}
        // facingMode={'rear'}
          />



        </div>
    )
}

export default ScanQR;

