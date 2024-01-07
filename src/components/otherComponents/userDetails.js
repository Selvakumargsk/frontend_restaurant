import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import ApiService from '../../services/apiservice';
import { getAdminId } from '../../services/sessionProvider';

const UserDetails = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState([]);
    const [rows, setRows] = React.useState([]);
  
    const columns = [
      { field: 'id', headerName: 'ID' , flex : 1},
      { field: 'username', headerName: 'Customer Name', flex: 1 },
      { field: 'email', headerName: 'Registered email', flex: 1 },
     
    ];

    useEffect(() => {
        if (!getAdminId()) {
          navigate('/');
        } else {
          (async () => {
            try {
              const response = await ApiService.post('/getUser', { adminId: getAdminId() });
              if (response.status === 200) {
                console.log(response);
                setValues(response?.data?.userList);
              } else {
                toast.error('error occurred');
              }
            } catch (err) {
              console.log(err);
            }
          })();
        }
      }, [navigate]); 
    
      useEffect(() => {
        setRows(values)
      }, [values]);


  return (
    <div style={{ height: '70vh', width: '100%', marginTop: '3%' }}>
      <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  pagination={true}
  pageSizeOptions={[5, 10, 20]}
  checkboxSelection
/>
</div>
  )
}

export default UserDetails