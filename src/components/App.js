import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestPreview from './ContestPreview';

//import data from '../testData'
class App extends React.Component{
  state = {
    pageHeader: "Naming contests",
    contests: this.props.initialContests
  };

  componentDidMount() {
    console.log('will mount');


  }

  componentWillUnmount() {
    console.log('will Un mount');
  }
  render() {
    return (
      <div>
        <div>
          <Header message={this.state.pageHeader}/>
        </div>
        <div>
          {this.state.contests.map(contest =>
              <ContestPreview key={contest.id} {...contest} />
          )}

        </div>
      </div>
    );
  }
  }


export default App;
