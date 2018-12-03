import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FirstComponent from './TopicsComponents/FirstComponent'
import SecondComponent from './TopicsComponents/SecondComponent'

function Topics() {
    return (
      <Router>
        <div>
          <h2>Topics</h2>
          
          <hr />

          <ul>
            <li>
              <Link to="/first-component">First Component</Link>
            </li>
            <li>
              <Link to="/second-component">Second Component</Link>
            </li>
          </ul>

          <Route path="/first-component" component={FirstComponent} />
          <Route path="/second-component" component={SecondComponent} />
        </div>
      </Router>
    );
  }
  
export default Topics