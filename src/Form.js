import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


const formStyles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        minWidth: 300
    }
};

class Form extends Component {
    render() {
        return (
            <Card className={formStyles.card}>
                <CardContent>
                    <TextField
                        id="standard-name"
                        label="Remetrica Study"
                        className={formStyles.textField}
                        value=""
                        margin="normal"
                        style={{ width: 350 }}
                    /><br/>
                    <TextField
                        id="standard-name"
                        label="Program Id"
                        className={formStyles.textField}
                        value=""
                        margin="normal"
                        style={{ width: 350 }}
                    /><br/>
                    <TextField
                        id="standard-name"
                        label="Program Description"
                        className={formStyles.textField}
                        value=""
                        margin="normal"
                        style={{ width: 1500, fontSize:15 }}
                    />
                </CardContent>
            </Card>
        )
    }

}

export default Form;