import React, { Component } from 'react';

export default class ProportionBar extends Component {
  render() {
    const {
      percentageINSS,
      percentageIRPF,
      percentageNetSalary,
      colorINSS = 'orange',
      colorIRPF = 'red',
      colorNetSalary = 'green',
    } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: percentageINSS + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: colorIRPF,
            width: percentageIRPF + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: colorNetSalary,
            width: percentageNetSalary + '%',
            height: '20px',
          }}
        />
      </div>
    );
  }
}
