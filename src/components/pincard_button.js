import React from 'react';
import './pincard.css';



const PincardButton = (props) => {

    const numClicked = () => {
        if (props.enabled) {
            props.clicked(props.num);
        }
    }

    return (
        <li className='pin-button-list'>
          <div className={ props.enabled ? 'pin-button' : 'pin-button disabled' } onClick={ numClicked }>
            { props.num }
          </div>
        </li>
        );
}

export default PincardButton;