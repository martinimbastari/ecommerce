import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import {getBasketTotal} from "../reducer";
import { useStateValue } from '../StateProvider';
import {Link as RouteLink} from "react-router-dom"

//styles
import '../components/total.css'

export default function Total() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='root'>
        <h5>Total items: {basket?.length}</h5>
        <h5 className='price'> {accounting.formatMoney(getBasketTotal(basket))} </h5>
        <RouteLink to="/checkout" >
        <Button Button variant='contained' color='secondary'>Check out</Button>
        </RouteLink>
    </div>
  )
}
