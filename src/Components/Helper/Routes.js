import React from 'react';


const PropertyDetails = React.lazy(() => import('../Pages/PropertyDetails'))
const Offers = React.lazy(() => import('../Pages/Offers'))
const ListingStatistics = React.lazy(() => import('../Pages/ListingStatistics'))

const routes = [
    { path: '/', exact: true, name: 'Home', component: PropertyDetails },
    { path: '/property-details', exact: true, name: 'Property Details', component: PropertyDetails },
    { path: '/offers', exact: true, name: 'Offers', component: Offers },
    { path: '/listing-statistics', exact: true, name: 'Property Details', component: ListingStatistics },

];

export default routes;
