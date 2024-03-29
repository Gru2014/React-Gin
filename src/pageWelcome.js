import React from 'react'

import {connect} from 'react-redux'

import {Grid, Cell} from 'react-mdl';

const main = React.createClass({
  render: function() {
    return (
        <Cell col={12}>
          <h1>Welcome!</h1>

        </Cell>
    )
  }
});

//Map the local state directly to the state tree in the combined reducer.
export const WelcomePage = connect((state) => state)(main);
