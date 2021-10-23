import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContent from './common/header/index'
import FooterDiv from './common/footer/index'
import ActivityFeed from './page/ActivityFeed';
import ActivityDetail from './page/ActivityDetail'
import ArchivedList from './page/ArchivedList'
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <div className="background">
          <div className="container">
            <HeaderContent />
            <BrowserRouter>
              <Route path='/' exact component={ActivityFeed } ></Route>
              <Route path='/detail' exact component={ActivityDetail} ></Route>
              <Route path='/archived' exact component={ArchivedList}></Route>
            </BrowserRouter>
            <FooterDiv />
          </div>
        </div>
      </>
    )
  }
}

export default App;
