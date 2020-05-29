import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import { COLOR_RED } from './../config/colors'
import { MAIN_BLUE } from './../config/colors'

export default class IconLabelTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>


                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <i style={{ color: 'white' }} class="fas fa-arrow-left"></i>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            style={{
                                border: '1px solid green',
                                borderRadius: '10px',
                                height: '30px',
                                fontSize: '12px',
                                paddingLeft: '30px'
                            }}>
                            <p style={{ color: 'green', float: 'left', marginTop: '7px' }}>Published</p>
                            <p style={{ color: 'blue', marginTop: '7px' }}><span style={{ color: COLOR_RED }}>#</span> RefNo. <span style={{ color: 'white' }}>W1956709</span></p>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        {this.buttonFunction("Property Details", '/property-details')}
                        {this.buttonFunction("Offers", '/offers')}
                        {this.buttonFunction("Listing Statistics", '/listing-statistics')}
                        {this.buttonFunction("Market Report", '/market-report')}
                        {this.buttonFunction("Document", '/document')}
                        {this.buttonFunction("Calender", '/calender')}
                        {this.buttonFunction("History", '/history')}

                    </Grid>
                </Grid>
            </div >
        );
    }

    // ButtonFunction
    buttonFunction = (label, nav) => {
        return (
            <Link
                to={nav}
                style={{
                    textDecoration: "None",
                }}
            >
                <Button
                    variant="contained"
                    style={{
                        background: MAIN_BLUE,
                        color: "#fff",
                        borderColor: MAIN_BLUE,
                        marginLeft: '5px',
                        fontSize: '12px',
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '0px',
                        textTransform: 'capitalize'

                    }}
                >
                    {label}
                </Button>
            </Link>
        )
    }
}