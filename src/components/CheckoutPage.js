import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import { useStateValue } from '../StateProvider';



export default function CheckoutPage() {
  const [{basket}, dispatch] = useStateValue();

  function FormRow() {
    return (
      <>
      {basket?.map((item) =>(
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <CheckoutCard key={item.id} product={item}/>
        </Grid>
      ))}
      </>
    );
  }

  return (
    <Box className='box' sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
       <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h4'>
              Shopping Cart
          </Typography>
       </Grid>
       <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow/>
       </Grid>
       <Grid item xs={12} sm={4} md={3}>
          <Typography align='center' gutterBottom variant='h4'>
              <Total/>
          </Typography>
       </Grid> 
      </Grid>
    </Box>
  );
}
