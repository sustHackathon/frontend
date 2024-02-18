import React from 'react'
import { useParams } from 'react-router-dom'

function BuyPage() {

    const {medicineId} = useParams();
    console.log(medicineId)
  return (
    <div>BuyPage</div>
  )
}

export default BuyPage