import React, { useEffect } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import ApiService from "../../services/apiservice";
import { toast } from "react-toastify";

export const ProductCard = () => {

    const [ MenuList , setList ] = React.useState([]);

    const fetchProduct = async()=>{ 
      try{
        const response = await ApiService.get('getProduct');
        setList(response?.data?.productList);
      }catch(err){
        console.log('error occured');
        toast.error('error occured please try again')
      }
    }
    
    useEffect(() => {
      fetchProduct();
    }, []); 

  return (
    <div>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" , marginTop: '2%' }}>
        {MenuList?.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  )
}
