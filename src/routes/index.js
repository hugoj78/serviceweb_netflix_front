import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import Home from '../page';
import User from '../page/user';

import Admin from '../page/admin';
import AllUser from '../page/admin/AllUser';

const WebService = () => {
    return(
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/user' element={<User/>} />

                <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/allUser' element={<AllUser/>} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </Router>
    );
};
export default WebService;