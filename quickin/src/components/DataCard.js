import React from 'react';
import { Typography, Grid, Paper} from '@material-ui/core';
import Table from './DataTable.js'

export default function DataCard(props) { 
    const [count] = React.useState(props.visitD.length);
    console.log(props.visitD);
    return (
        <React.Fragment>
            <Grid container justify={'center'} alignItems={'center'}>
                <Grid item xs={12}>
                    <Typography style={{textAlign: 'center'}} variant={'body1'}>
                        Access your contact tracing data below.
                    </Typography>
                    <br />
                    <Grid container justify={'center'} alignItems={'center'}>
                        <Grid item xs={6} >
                            <Paper elevation={3}>
                                <br />
                                <Typography variant={'body2'} style={{textAlign: 'center'}}>Total check-ins logged today:</Typography> 
                                <Typography variant={'h1'} style={{textAlign: 'center'}}>{count}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <br />
                        <br />
                            <Table data={props.visitD}/>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}