import React from 'react';
import './Animation.scss';
import Snowflake from './Snowflake.js';
import PropTypes from 'prop-types';

const Animation = (props) => {
  let snowflakeAmt = 150;
  let snowflake = [];
  if (props.amount.value === 'Business') {
    snowflakeAmt = 100;
  } else if(props.amount.value === 'Recreational') {
    snowflakeAmt = 300;
  } else if(props.amount.value === 'EXTREME') {
    snowflakeAmt = 1000;
  }
  for (var i = 0; i < `${snowflakeAmt}`; i ++) {
    snowflake.push(Math.floor(Math.random() * 1000))
  }
  const flakes = snowflake.map(flake => <Snowflake locationX={flake - 50} locationY={Math.floor(Math.random() * 1500) - 100} key={Math.random()}/>);
  return (
    <div className="snowflake-container">
      {flakes}
    </div>
  )
}

Animation.propTypes = {
  amount: PropTypes.object
};

export default Animation;
