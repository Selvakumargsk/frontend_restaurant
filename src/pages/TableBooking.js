import React, { useState } from 'react';
import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import Layout from '../components/Layout/Layout';

const TableBookingForm = () => {
    const [formData, setFormData] = useState({
        tableNumber: '',
        adults: '',
        children: '',
        bookingDate: '',
        bookingTime: '',
        phoneNumber: '',
        customerName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit} className='my-[5%] mx-[10%]'>
                <h2 className='text-red-500 text-center font-bold mb-3'>Book Your Table</h2>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Customer Name"
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Number of Adults"
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Number of Children"
                            type="number"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Booking date</Typography>
                        <TextField
                            type="date"
                            name="bookingDate"
                            value={formData.bookingDate}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Typography>Booking time</Typography>
                        <TextField
                            type="time"
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleChange}
                            fullWidth
                            className='mb-2'
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                        <Typography>Select Table</Typography>
                            <Select
                                labelId="tableNumber-label"
                                id="tableNumber"
                                name="tableNumber"
                                value={formData.tableNumber}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Table 1</MenuItem>
                                <MenuItem value={2}>Table 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* Add any additional fields as needed */}
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" className='mt-3' type="submit">
                    Book Table
                </Button>
            </form>
        </Layout>
    );
};

export default TableBookingForm;
