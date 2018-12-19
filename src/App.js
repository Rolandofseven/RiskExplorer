import React, { Component } from 'react';
import NavBar from './NavBar';
import SimpleTabs from './Tabs.js';
import DealGrid from './DealGrid';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class SearchAppBar extends Component {

  constructor(props) {
    super(props);

    let x = 1;
    x = "";
    
  }
  render() {
    return (
      <div><NavBar /><br />
        <SimpleTabs />
        <div
          className="ag-theme-balham"
          style={{
            height: '500px',
            width: '600px'
          }}
        >
         
        </div>
      </div>
    );
  }
}

export default SearchAppBar;