import React from 'react'
import { getAdminId } from '../services/sessionProvider'
import { useNavigate } from 'react-router-dom'
import ApiService from '../services/apiservice';
import { toast } from 'react-toastify';
import Layout from '../components/Layout/Layout';

const BookingDetails = () => {
    const navigate = useNavigate();
    const [values , setValues] = React.useState([]);

    if(!getAdminId()){
        navigate('/');
    }else{
        try{
            (async()=>{
                const response = await ApiService.post('/details' , {adminId : getAdminId()});
                if(response.status === 200){
                    console.log(response);
                    setValues(response?.data?.booking);
                }else{
                    toast.error('error occured');
                }

            })()

        }catch(err){
            console.log(err);
        }
        return (
            <Layout>
                {
                    values.map(val=>(
                        <div>
                            <div>{val?.customerName}</div>
                            <div>{val?.tableNumber}</div>
                            <div>{val?.phoneNumber}</div>
                        </div>
                    ))
                }
                
            </Layout>
          )
    }

 
}

export default BookingDetails