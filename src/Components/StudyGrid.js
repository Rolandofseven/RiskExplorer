import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class StudyGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "Selected", field: "selected", width: 100, "checkboxSelection": true },
                { headerName: "Description", field: "description" },
                { headerName: "Suffix", field: "suffix" },
                { headerName: "Total Limit ($)", field: "totalLimit", width: 120 },
                { headerName: "Perspective", field: "perspective" },
                { headerName: "Comments", field: "comments" },
                { headerName: "E(L) Agg", field: "elAgg", width: 90 },
                { headerName: "E(L) Occ", field: "elOcc", width: 90 },
                { headerName: "P(Att)", field: "pAtt", width: 90 },
                { headerName: "P(Exh)", field: "pExh", width: 90 },
                { headerName: "Status", field: "status" },
                { headerName: "Our Limit ($)", field: "ourLimit" },
                { headerName: "Market Gross", field: "marketGross" },
                { headerName: "Reinst", field: "reinst" },
                { headerName: "Pos (LO)", field: "posLo" },
                { headerName: "ART (LO)", field: "artLo" },
                { headerName: "Syn (LO)", field: "synLo" },
                { headerName: "Pos (LS)", field: "posLs" },
                { headerName: "ART (LS)", field: "artLs" },
                { headerName: "Syn (LS)", field: "synLs" },
                { headerName: "Pos (Re)", field: "posRe" },
                { headerName: "ART (Re)", field: "artRe" },
                { headerName: "Syn (Re)", field: "synRe" },
                { headerName: "CoTVar", field: "coTVar" },
                { headerName: "Pos Dec", field: "posDec" },
                { headerName: "ART Dec", field: "artDec" },
                { headerName: "Syn Dec", field: "synDec" },
            ],
            rowData: [
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },

                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
                { "description": "/Cladd 1 - 85 67 458", "suffix": "1", "totalLimit": "400,00,000", "perspective": "", "comments": "", "elAgg": "16.34%", "elOcc": "15.96%", "pAtt": "23.47%", "pExh": "11.47", "status": "Approved" },
            ]
        }
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }


    handelClick = () => {
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
                    rowSelection='single'
                >
                </AgGridReact>
               
            </div>
        );
    }
}

export default StudyGrid;