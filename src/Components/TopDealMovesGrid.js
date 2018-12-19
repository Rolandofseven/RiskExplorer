import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TopDealMovesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Deal", field: "Deal", width:350 },
        { headerName: "P&L (m)", field: "PNL", width:85,
      
        cellStyle: function(params) {
          if (params.value>0) {
              //mark police cells as red
              return {color: 'green'};
          } else {
            return {color: 'red'};
          }
      }
      },
       
        
        
      ],
      rowData: [
        {  "Deal":"Hartford Top & Drop $200m xs 825m One Shot and 100 xs 1.1BN", "PNL":1500 },
        {  "Deal":"Cathedral D&F Program $72.5mxs$60m US Canada Carrib & MX All Perils Australasia EQ", "PNL":1500 },
        {  "Deal":"USAA $900M x $2250M US ANP Agg Property Only (Franchise $50M)", "PNL":1500 },
        {  "Deal":"USAA $600M x $1700M US ANP Agg Property & Auto (Franchise $50M)", "PNL":-250 },
        {  "Deal":"USAA $1400M x $2300M US ANP Agg Property & Auto (Franchise $50M)", "PNL":1500 },
        {  "Deal":"UPC Layer 2: $350M x $285M (cascades to $35M) (RUB)", "PNL":1500 },
        {  "Deal":"UPC Layer 3: $450M x $635M (cascades to $35M) (RUB)", "PNL":-1500},
        {  "Deal":"UPC Layer 5: $535M x $1585M (cascades to $35M) (AGR) (ART5141)", "PNL":3000},
        {  "Deal":"UPC Layer 2: $350M x $285M (cascades to $35M) (POS)", "PNL":1750 },
        {  "Deal":"Hartford Top & Drop $200m xs 825m One Shot and 100 xs 1.1BN", "PNL":1500 },
        {  "Deal":"Cathedral D&F Program $72.5mxs$60m US Canada Carrib & MX All Perils Australasia EQ", "PNL":1500 },
        {  "Deal":"USAA $900M x $2250M US ANP Agg Property Only (Franchise $50M)", "PNL":1500 },
        {  "Deal":"USAA $600M x $1700M US ANP Agg Property & Auto (Franchise $50M)", "PNL":-250 },
        {  "Deal":"USAA $1400M x $2300M US ANP Agg Property & Auto (Franchise $50M)", "PNL":1500 },
        {  "Deal":"UPC Layer 2: $350M x $285M (cascades to $35M) (RUB)", "PNL":1500 },
        {  "Deal":"UPC Layer 3: $450M x $635M (cascades to $35M) (RUB)", "PNL":-1500},
        {  "Deal":"UPC Layer 5: $535M x $1585M (cascades to $35M) (AGR) (ART5141)", "PNL":3000},
        {  "Deal":"UPC Layer 2: $350M x $285M (cascades to $35M) (POS)", "PNL":1750 },
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
            height: '549px',
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

export default TopDealMovesGrid;