import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

 //Styles
 import '../components/checkoutCard.css'



export default function CheckoutCard({product : {id, name, rating, productType, price, description, image}}) {
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography 
          variant='h6'
          padding={1}
          color='textSecondary'>
              {accounting.formatMoney(price)}
            </Typography>
        }

        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      
      <CardActions className='cardActions'  disableSpacing>
        <div className='cardRating'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p>&#11088;</p>
            ))}
        </div>
        <IconButton onClick={removeItem}>
            <DeleteIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
  );
}