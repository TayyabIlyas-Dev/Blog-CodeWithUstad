import React from 'react'
import Link from 'next/link'

const Homes = ({ params }:{params:{products:string}}) => {
  return (
    <div>
      <p>the product name is :{params.products}</p>
    </div>
  )
}

export default Homes;
