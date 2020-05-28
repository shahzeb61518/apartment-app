import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';




export default class PropertyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "2 Bedroom - Apartment - Marina Residences, Trunk West - Palm Jumeirah",
            amount: '1,749,000',
            currency: 'AED',
        }
    }

    render() {
        return (
            <div>
                {
                    this.body()
                }
            </div>
        )
    }

    // body of Property Details
    body = () => {
        return (
            <div >
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper >
                                    <h5> {this.state.title}</h5>
                                    <h5>{this.state.currency}</h5>
                                    <h5>{this.state.amount}</h5>
                                    <i class="fas fa-edit"></i>

                                </Paper>
                            </Grid>
                            <Divider />

                            <Grid item xs={3}>
                                <Paper >xs=3</Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper>
                                    <h5>Property Details</h5>
                                    <Divider />
                                    <div>
                                        <Grid container >
                                            <Grid item xs={3}>
                                                <Paper >
                                                    <i class="fas fa-edit">Edit</i>
                                                    <br />
                                                    <i class="fas fa-edit">Edit</i>
                                                    <br />
                                                    <i class="fas fa-edit">Edit</i>
                                                    <br />
                                                    <i class="fas fa-edit">Edit</i>
                                                    <br />
                                                    <i class="fas fa-edit">Edit</i>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper >
                                                    <h6>Apartment</h6>
                                                    <h6>2</h6>
                                                    <h6>18000</h6>
                                                    <h6>furnished</h6>
                                                    <h6>empower</h6>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <br />
                                    <h5>Description</h5>
                                    <Divider />
                                    <p>this is a avetry intensting statmetn of this is fasfdas fasfasf
                                    this is a avetry intensting statmetn of this is fasfdas fasfasf
                                    this is a avetry intensting statmetn of this is fasfdas fasfasf
                                    this is a avetry intensting statmetn of this is fasfdas fasfasf
                                    </p>
                                </Paper>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper>xs=3</Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </React.Fragment>

            </div>)
    }
}



