import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { MAIN_BLUE_BACKGROUND } from './../config/colors'
import { MAIN_BLUE } from './../config/colors'
import { COLOR_PINK } from './../config/colors'
import { COLOR_RED } from './../config/colors'


import img1 from './../../Assets/images/img1.jpg'
import img2 from './../../Assets/images/img2.jpg'
import img3 from './../../Assets/images/img3.jpg'

export default class PropertyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "2 Bedroom - Apartment - Marina Residences, Trunk West - Palm Jumeirah",
            amount: '1,749,000',
            currency: 'AED',
            value: 0,

            type: 'Apartment',
            bedrooms: '2',
            builtUp: '18000.00',
            furnished: 'furnished',
            cooling: 'empower',

            height: '47',
            bathrooms: '3',
            plotSize: '0',
            parking: '2',
            serviceCharge: 'AED 15 per SqrFt',

            permitNo: '5435436',
            listingExpiry: '9 jun 2019',
            dewaPromisNo: '383-10689-3',
            makaniNum: '15866 77079',
            rentalStatus: 'Vacent',
            completionStatus: 'Ready/Completed',

            image: img1

        }
    }



    render() {
        return (
            <div>
                <div>
                    {
                        this.body()
                    }
                </div>

            </div>
        )
    }

    // body of Property Details
    body = () => {
        const {
            type,
            bedrooms,
            builtUp,
            furnished,
            cooling,

            height,
            bathrooms,
            plotSize,
            parking,
            serviceCharge,

            permitNo,
            listingExpiry,
            dewaPromisNo,
            makaniNum,
            rentalStatus,
            completionStatus
        } = this.state

       

        return (
            <div >
                <React.Fragment>
                    <Card style={{
                        background: MAIN_BLUE,
                        borderRadius: '10px',
                        padding: '20px'
                    }}>

                        <Grid container spacing={3} style={{ color: 'white' }}>
                            <Grid item xs={1}>
                                <div style={{
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    background: COLOR_RED,
                                    color: 'white',
                                    marginTop: '5px'
                                }}>
                                    Sale
                            </div>
                            </Grid>
                            <Grid item xs={9} style={{ textAlign: 'left' }}>
                                <h3 style={{ marginTop: '0px' }}> {this.state.title}</h3>
                            </Grid>
                            <Grid item xs={2} >
                                <h3 style={{ float: 'left', marginTop: '0px' }}>{this.state.currency}</h3>
                                <h3 style={{ float: 'left', marginTop: '0px' }}>{this.state.amount} <i class="fas fa-edit"></i></h3>
                            </Grid>
                        </Grid>
                        <Divider style={{ backgroundColor: 'rgba(191, 191, 191, 0.56)' }} />
                        <br />
                        <br />
                        <Grid container spacing={3} style={{ color: 'white' }}>

                            <Grid item xs={3}>
                                <div>
                                    {this.buttonFunction("Photos")}

                                    {this.buttonFunction("Floor Plan")}

                                    {this.buttonFunction("360 View")}
                                </div>
                                <Card style={{ background: MAIN_BLUE }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={this.state.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent style={{ textAlign: 'left' }}>
                                            <img
                                                onClick={() => {
                                                    this.setState({
                                                        image: img1
                                                    })
                                                }}
                                                style={{ width: '50px' }}
                                                src={img1}
                                                alt="img" />

                                            <img
                                                onClick={() => {
                                                    this.setState({
                                                        image: img2
                                                    })
                                                }}
                                                style={{ width: '50px', marginLeft: '5px' }}
                                                src={img2}
                                                alt="img" />

                                            <img
                                                onClick={() => {
                                                    this.setState({
                                                        image: img3
                                                    })
                                                }}
                                                style={{ width: '45px', marginLeft: '5px' }}
                                                src={img3}
                                                alt="img" />
                                            <i class="fas fa-edit"
                                                style={{ color: 'white', marginTop: '10px', float: 'right' }}
                                            > </i>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid>

                            <Grid item xs={6} style={{ textAlign: 'left', padding: '10px' }}>
                                <h5 style={{ marginBottom: '5px' }}>Property Details</h5>
                                <Divider style={{ backgroundColor: 'rgba(191, 191, 191, 0.56)' }} />
                                <div>
                                    <Grid container >
                                        <Grid container item xs={6}>
                                            <Grid item xs={4}>
                                                <div>
                                                    <i
                                                        class="fa fa-building"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px' }}
                                                    > </i>
                                                    <h6> Type </h6>
                                                </div>
                                                <div>
                                                    <i
                                                        class="fa fa-bed"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Bedrooms </h6>
                                                </div>
                                                <div>
                                                    <i class="fa fa-home"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Built-Up </h6>
                                                </div>
                                                <div>
                                                    <i class="fas fa-couch"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Furnished </h6>
                                                </div>
                                                <div>
                                                    <i class="fa fa-spinner"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Cooling</h6>
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div>
                                                    <h6>{type}</h6>
                                                </div>
                                                <div>
                                                    <h6>{bedrooms}</h6>
                                                </div>
                                                <div>
                                                    <h6>{builtUp}</h6>
                                                </div>
                                                <div>
                                                    <h6>{furnished}</h6>
                                                </div>
                                                <div>
                                                    <h6>{cooling}</h6>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container item xs={6}>
                                            <Grid item xs={4}>
                                                <div>
                                                    <i class="fas fa-ruler"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Height</h6>
                                                </div>
                                                <div>
                                                    <i class="fa fa-bath"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Bathrooms</h6>
                                                </div>
                                                <div>
                                                    <i class="fas fa-parking"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Plot Size</h6>
                                                </div>
                                                <div>
                                                    <i class="fa fa-car"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6> Parking</h6>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill"
                                                        style={{ color: COLOR_PINK, float: 'left', paddingRight: '10px'  }}
                                                    > </i>
                                                    <h6>Service Charge</h6>
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div>
                                                    <h6>{height}</h6>
                                                </div>
                                                <div>
                                                    <h6>{bathrooms}</h6>
                                                </div>
                                                <div>
                                                    <h6>{plotSize}</h6>
                                                </div>
                                                <div>
                                                    <h6>{parking}</h6>
                                                </div>
                                                <div>
                                                    <h6>{serviceCharge}</h6>
                                                </div>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>
                                <br />
                                <h5 style={{ marginBottom: '5px' }}>Description</h5>
                                <Divider style={{ backgroundColor: 'rgba(191, 191, 191, 0.56)' }} />
                                <div style={{ fontSize: '11px' }}>
                                    <p >Spectacular amounts of Sea View. High qaulity spacious Apartment. More value for money.</p>
                                    <p>Close to a community center which has retail and other facilities.</p>
                                    <p>Gated, family, suburban community.</p>
                                    <p>Close to school</p>
                                </div>

                            </Grid>

                            <Grid item xs={3}>
                                <Card style={{
                                    background: MAIN_BLUE,
                                    borderRadius: '10px',
                                    padding: '20px',
                                    color: 'white'
                                }}>
                                    <br />
                                    <br />
                                    <Grid container item xs={12}>
                                        <Grid item xs={6}>
                                            <h6>Permit No.</h6>
                                            <h6>Listing Expiry</h6>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <h6>{permitNo}</h6>
                                            <h6>{listingExpiry}</h6>
                                        </Grid>
                                        <div
                                            style={{
                                                background: 'rgba(152, 152, 152, 0.7)',
                                                height: '1px',
                                                width: '100%'
                                            }}>
                                        </div>
                                        <Grid item xs={6}>
                                            <h6>DEWA Premises No.</h6>
                                            <h6>Makani Number</h6>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <h6>{dewaPromisNo}</h6>
                                            <h6>{makaniNum}</h6>
                                        </Grid>
                                        <div
                                            style={{
                                                background: 'rgba(152, 152, 152, 0.7)',
                                                height: '1px',
                                                width: '100%'
                                            }}>
                                        </div>
                                        <Grid item xs={6}>
                                            <h6>Rental Status</h6>
                                            <h6>Completion Status</h6>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <h6>{rentalStatus}</h6>
                                            <h6>{completionStatus}</h6>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>

                    </Card>
                </React.Fragment>

            </div >)
    }



    // ButtonFunction
    buttonFunction = (label) => {
        return (
            <Button
                variant="contained"
                size="small"
                style={{
                    background: MAIN_BLUE_BACKGROUND,
                    color: "#fff",
                    borderColor: MAIN_BLUE_BACKGROUND,
                    marginLeft: '5px',
                    fontSize: '11px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                    textTransform: 'capitalize',
                    width: '80px'

                }}
            >
                {label}
            </Button>
        )
    }

}



