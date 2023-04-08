import React, { useEffect, useState } from 'react'
import { fakeFetch } from '../Data'

const ShowProduct=({filterData})=>{
    return(
        <>
            {filterData.map(({name,desc,price,src},i)=><div key={i}>
                <img src={src} alt="img"/>
                <h2>Name: {name}</h2>
                <p><strong>price</strong> {price}</p>
                <p><strong>description</strong> {desc}</p>
            </div>)}
        </>
    )
}

export const ProductQ = () => {
const [productData,setProductData]=useState([])
const [selectedData,setSelectedData]=useState("Shoes")

const fakeData=async ()=>{
    const {status,data:{products}}=await fakeFetch("https://example.com/api/products")
    status===200 && setProductData(products)
}

useEffect(()=>{
    fakeData()
},[])

const filterData=productData.filter(({name})=>selectedData===name)
    return (
   <>
{productData.map(({name},i)=><button onClick={()=>setSelectedData(name)} key={i}>show {name }</button>)}
   <ShowProduct filterData={filterData} />
   </>
  )
}
