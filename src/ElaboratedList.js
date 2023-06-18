import React, { useEffect , useState} from 'react'
import { useLocation } from 'react-router-dom'
export default function ElaboratedList() {
    const [list , setList] = useState([])
    const location = useLocation()
    console.log(location.state)
    useEffect(() => {
        setList(location.state)
    },[location.state])
  return (
    <div>
      <ul>
        {list.map((data) => {
            return (
                <>
                    <li>{data.displayName} {data.items.length}</li>
                    <li>{data.items.map((item) => {
                        return (
                            <li>{item.displayName}</li>
                        )
                    })}</li>
                </>
            )
        })}
      </ul>
    </div>
  )
}
