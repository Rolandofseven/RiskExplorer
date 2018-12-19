import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import BarChart from './BarChart';
import BiDirectionalBarChart from './BiDirectionalBarChart';
import LineChart1 from './LineChart1';
import TopDealMovesGrid from './TopDealMovesGrid';
import WorldMap from './WorldMap';

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

class Charts extends Component {
    render() {
        return (
            <div>
                 <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper ><BarChart /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper><WorldMap /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper ><LineChart1/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper ><TopDealMovesGrid/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper ><BiDirectionalBarChart /></Paper>
        </Grid>
        </Grid>
              
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default Charts;