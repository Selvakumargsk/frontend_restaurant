import React, { useEffect } from 'react';
import { getAdminId } from '../services/sessionProvider';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/apiservice';
import { toast } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import { DataGrid } from '@mui/x-data-grid';

const BookingDetails = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customerName', headerName: 'Customer Name', flex: 1 },
    { field: 'tableNumber', headerName: 'Table Number', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'adults', headerName: 'Number of Adults', flex: 1 },
    { field: 'children', headerName: 'Number of children', flex: 1 },
    { field: 'bookingDate', headerName: 'Booking Date', flex: 1 },
    { field: 'bookingTime', headerName: 'Booking Time', flex: 1 },
  ];

  useEffect(() => {
    if (!getAdminId()) {
      navigate('/');
    } else {
      (async () => {
        try {
          const response = await ApiService.post('/details', { adminId: getAdminId() });
          if (response.status === 200) {
            console.log(response);
            setValues(response?.data?.booking);
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
    <Layout>
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
    </Layout>
  );
};

export default BookingDetails;
