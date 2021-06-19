import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-scanner'

ScanQR.propTypes = {
    delay: PropTypes.number,
    result: PropTypes.string,
}
ScanQR.defaultProps = {
    delay: 100,
    result: 'No result',
}

const handleScan = ()=> {};
const handleError = ()=> {};

function ScanQR(props) {
    const {delay,result} = props;
    return (
        <div>
        <QrReader
          delay={delay}
          style= {{height: 240, width: 320, border : '2px solid blue'}}
         onError={handleError}
         onScan={handleScan}
          />
        </div>
    )
}

export default ScanQR;

