import React from 'react';
import { observer } from 'mobx-react';
import Login from './Login'; // Import the Login component
import AdminHome from './AdminHome'; // Import the AdminHome component
import dataStore from '../../store/store.js';

const Admin = observer(() => {

  return (

    <div>
      {dataStore.isLogin ? <AdminHome /> : <Login />}

    </div>

  );
});

export default Admin;
