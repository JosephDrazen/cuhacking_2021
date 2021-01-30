import React, { Component } from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/Individual.json'

class UncontrolledLottie extends Component {
  render(){
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
      <div>
        <Lottie options={defaultOptions}
              height={250}
              width={250}
        />
      </div>
    )
  }
}
export default UncontrolledLottie