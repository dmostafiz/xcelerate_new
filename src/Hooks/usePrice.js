import React from 'react'
import useUser from './useUser'

export default function usePrice() {

    const {authUser} = useUser()

    const price = (product) => {

        
        if(authUser?.is_member){
            
            console.log('Member price ',  product?.member_price)
            const price = {is_member: true, amount: product?.member_price, default_amount: product?.price, member_price: product?.member_price}
            return price
        }else{
            const price = {is_member: false, amount: product?.price, default_amount: product?.price,  member_price: product?.member_price}
            console.log('Regular price ', price)
            return price
        }
    }

  return price
}
