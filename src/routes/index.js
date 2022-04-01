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
import AddUser from '../page/admin/AddUser'
import DeleteUser from '../page/admin/DeleteUser'

import AllPoster from '../page/poster/allPoster';
import AddPoster from '../page/poster/AddPoster';
import UpdatePoster from '../page/poster/UpdatePoster';
import ShowPosterByMoment from '../page/poster/showPosterByMoment'

import AllMedia from '../page/media/allMedia';
import AddMedia from '../page/media/AddMedia';
import UpdateMediaDescription from '../page/media/updateMediaDescription';
import DeleteMedia from '../page/media/deleteMedia';

const WebService = () => {
    return(
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/user' element={<User/>} />

                <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/allUser' element={<AllUser/>} />
                <Route path='/admin/addUser' element={<AddUser/>} />
                <Route path='/admin/deleteUser' element={<DeleteUser/>} />

                <Route path='/admin/allPoster' element={<AllPoster/>} />
                <Route path='/admin/addPoster' element={<AddPoster/>} />
                <Route path='/admin/updatePoster' element={<UpdatePoster/>} />
                <Route path='/admin/showPosterByMoment' element={<ShowPosterByMoment/>} />


                <Route path='/admin/allMedia' element={<AllMedia/>} />
                <Route path='/admin/addMedia' element={<AddMedia/>} />
                <Route path='/admin/updateMediaDescription' element={<UpdateMediaDescription/>} />
                <Route path='/admin/deleteMedia' element={<DeleteMedia/>} />

                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </Router>
    );
};
export default WebService;