import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

// export const Statistics = () => {};

class Statistics extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
      </div>
    );
  }
}

export default Statistics;
// Statistics.PropTypes = {};
