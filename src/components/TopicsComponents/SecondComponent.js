import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FirstModal from './Modal/FirstModal';
import SecondModal from './Modal/SecondModal'

function SecondComponent() {
    return (
      <Router>
        <div>
          <ul>
              <li>
                <Link to="/second-component/firstmodal">First modal window</Link>
              </li>
              <li>
                <Link to="/second-component/secondmodal">Second modal window</Link>
              </li>
            </ul>

            <Route path = '/second-component/firstmodal' component = {FirstModal} />
            <Route path = '/second-component/secondmodal' component = {SecondModal} />

        </div>
      </Router>
    );
  }

export default SecondComponent