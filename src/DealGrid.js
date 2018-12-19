import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DealGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Deal Id", field: "dealId" },
        { headerName: "Deal Ref", field: "dealRef" },
        { headerName: "Source System", field: "sourceSystem" },
        { headerName: "Deal Type", field: "dealType" },
        { headerName: "Deal Status", field: "dealStatus" },
        { headerName: "Description", field: "description" },
        { headerName: "Signed Limit", field: "signedLimit" },
        { headerName: "Expected Limit", field: "expectedLimit" },
        { headerName: "Authorized Limit", field: "authorizedLimit" },
        { headerName: "Quote Limit", field: "quoteLimit" },
        { headerName: "Allocation Limit", field: "allocationLimit" },
        { headerName: "USD Limit", field: "usdLimit" },
        { headerName: "CCY", field: "ccy" },
        { headerName: "FX", field: "fx" },
        { headerName: "Inception Date", field: "inceptionDate" },
        { headerName: "Experation Date", field: "experationDate" }
        
        
      ],
      rowData: [
        { id:1,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:2,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:3,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:4,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:5,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:6,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:7,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
        { id:8,dealId: "10001", dealRef: "2017-1001", sourceSystem:"Ignition", dealType: "ReinsuranceXOL", dealStatus:"NotSet", description:"", counterParty:"", signedLimit:1000, expectedLimit:1000,authorizedLimit:1000,quoteLimit:1000, allocationLimit:1000,usdLimit:1000, ccy:"USD", fx:1.2, inceptionDate:null, experationDate:null },
      ]
    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  handelClick =() => {
    alert("her")
    var rowNode = this.gridApi.getRowNode("1");
    var newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue("sourceSystem", "bob");
  }
  render() {
    return (
        <div
          className="ag-theme-balham"
          style={{
            height: '500px',
            width: '100%'
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady.bind(this)}
              rowSelection = 'single'
          >
          </AgGridReact>
         
        </div>
    );
  }
}

export default DealGrid;