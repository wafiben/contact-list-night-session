import React from 'react';
import FormUser from '../Compoents/FormUser';

function AdminDashboard() {
  return (
    <div>
        <h1>ADd user</h1>
        <FormUser commandeType='add'/>
    </div>
  )
}

export default AdminDashboard