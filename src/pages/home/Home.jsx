import React from 'react';
import Header from '../../components/Header/Header';
import Tasks from '../../containers/Tasks/Tasks';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Tasks />
      </React.Fragment>
    );
  }
}

export default Home;
