import React from 'react';

const PinScreen = (props) => {

  if (props.value === "") {
    return <div className='pin-screen'>
                 Enter Pin
               </div>;
  }

  let val = props.value.split('');
  for (var i = 0; i < val.length; i++) {
    if (i !== val.length - 1) {
      val[i] = '*';
    }
  }

  return (
    <div className='pin-screen'>
          { props.enabled ? val : props.value }
        </div>
  )
}

export default PinScreen;