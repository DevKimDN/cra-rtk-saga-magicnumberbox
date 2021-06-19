import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-scanner'

ScanQR.propTypes = {
    delay: PropTypes.number,
    result: PropTypes.string,
}
ScanQR.defaultProps = {
    delay: 2000,
    result: 'No result',
}

const handleScan = (data)=> {if(data)alert(data)};
const handleError = (er)=> {console.log('qr-error: ',er);alert(er)};

function ScanQR(props) {
    const {delay,result} = props;
    return (
        <div>
        <QrReader
          delay={delay}
          style= {{height: 240, width: 320, border : '2px solid blue'}}
         onError={handleError}
         onScan={handleScan}
         facingMode={'rear'}
          />
        </div>
    )
}

export default ScanQR;

