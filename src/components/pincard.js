import React, { Component } from 'react';
import './pincard.css';
import PincardButton from './pincard_button';
import PinScreen from './pinscreen';

const PIN_COMBINATION = "2048";
const maxNum = 4;
const pinButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


class PinCard extends Component {

  constructor(props) {
    super(props);

    this.pinButtons = pinButtons.reverse();

    this.state = {
      screenNumber: '',
      numTries: 0,
      enabled: true
    };
  }

  updatePin(num) {
    const {screenNumber, numTries} = this.state;
    this.setState({
      screenNumber: screenNumber + num,
      numTries: numTries + 1
    });
  }

  validatePin() {
    const {screenNumber} = this.state;
    if (screenNumber === PIN_COMBINATION) {
      this.setState({
        screenNumber: "PIN OK"
      });
    } else {
      this.setState({
        screenNumber: "ERROR"
      });
    }
    setTimeout(this.resetPin, 2500);
  }

  resetPin = () => {
    this.setState({
      screenNumber: '',
      numTries: 0,
      enabled: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {numTries} = this.state;
    if (numTries === maxNum) {
      this.validatePin();
      this.setState({
        enabled: false,
        numTries: 0
      });
    }
  }

  render() {
    const {screenNumber, enabled} = this.state;
    const buttonClicked = (num) => {
      this.updatePin(num)
    };


    return (
      <div className='pincard'>
              <PinScreen value={ screenNumber } enabled={ enabled } />
        <ul className='pin-ul'>
                { pinButtons.map((num, i) => {
        return <PincardButton key={ i }
          enabled={ enabled }
          num={ num }
          clicked={ buttonClicked } />;
      })}
              </ul>
            </div>
      );
  }
}

export default PinCard;