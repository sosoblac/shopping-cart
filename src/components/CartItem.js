import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { Button, Stack } from 'react-bootstrap'
import formatCurrency from '../utilities/formatCurrency'

const CartItem = ({id,quantity}) => {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(item=>item.id === id)
    if (item==null) return null
  return (
    <Stack direction ="horizontal" gap={2} className='d-flex'>
        <img 
        src={item.imgUrl} alt="" 
        style={{
            width:"125px",height:"75px",objectFit:"cover"
             }} 
        />
        <div className="me-auto">
            <div>
                {item.name}{quantity > 1 && 
                <span className='text-muted' style={{fontSize:".65rem"}}>x{quantity}</span>
                }
            </div>
            <div className="muted-text" style={{fontSize:'.75rem'}}>
                {formatCurrency(item.price)}
            </div>
        </div>
        <div >
            {formatCurrency(item.price * quantity)}
        </div>
        <Button variant='outline-danger' size="sm" onClick={()=>removeFromCart(id)} >&times;</Button>
        
    </Stack>
  )
}

export default CartItem
