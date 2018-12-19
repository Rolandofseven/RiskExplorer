import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AllocationGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "allocationId", field: "allocationId" },
                { headerName: "dealId", field: "dealId" },
                { headerName: "weight", field: "weight" },
                { headerName: "amount", field: "amount" },
                { headerName: "customer", field: "customer" },
                { headerName: "customer", field: "customer" },
                { headerName: "front", field: "front" },
                { headerName: "fund", field: "fund" }
            ],
            rowData: [
                { allocationId: 1, dealId: 1, weight: "CCY", amount: 4500.93, customer: "Nephila Fund Management", front: "Lloyds", fund: "Lotus Master Fund" },
                { allocationId: 1, dealId: 1, weight: "CCY", amount: 4500.93, customer: "Nephila Fund Management", front: "Lloyds", fund: "Lotus Master Fund" },
                { allocationId: 1, dealId: 1, weight: "CCY", amount: 4500.93, customer: "Nephila Fund Management", front: "Lloyds", fund: "Lotus Master Fund" },
                { allocationId: 1, dealId: 2, weight: "CCY", amount: 4500.93, customer: "Nephila Fund Management", front: "Lloyds", fund: "Lotus Master Fund" },
                { allocationId: 1, dealId: 2, weight: "CCY", amount: 4500.93, customer: "Nephila Fund Management", front: "Lloyds", fund: "Lotus Master Fund" }
            ]
        }
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }


    handelClick = () => {
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
                    width: '50%'
                }}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    onGridReady={this.onGridReady.bind(this)}
                >
                </AgGridReact>
                
            </div>
        );
    }
}

export default AllocationGrid;