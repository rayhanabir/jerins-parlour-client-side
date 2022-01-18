import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import AddService from '../AddService/AddService';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';

const DashboardHome = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
          <h2>DASHBOARD HOME</h2> 
            <Switch>
            <Route path={`${path}/orderList`}>
                <OrderList></OrderList>
            </Route>
            <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addService`}>
                <AddService></AddService>
            </Route>
            <Route path={`${path}/bookingList`}>
                <BookingList></BookingList>
            </Route>
            <Route path={`${path}/review`}>
                <Review></Review>
            </Route>
        </Switch>
        </div>
    );
};

export default DashboardHome;