import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'

export default function InventoryDetails() {
  const location = useLocation()
  const navigate = useNavigate()
    const [inventory , setInventory] = useState([])

    useEffect( () => {
      setInventory(location.state.inventory)
    },[location.state.inventory])

    const handleClick = (list) => {
      console.log(list)
      navigate('/elaborated-list',{
        state : list
      })
    }
     
    return (
    <div>
      {inventory.map( (data) => {
        return(
          <ul>
            <li>{data.name} {data.category.length}<button onClick={() => handleClick(data.category)}>click</button></li>
          </ul>
        )
      })}
    </div>
  )
}
