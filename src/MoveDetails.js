import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function MoveDetails(props) {
    console.log(props.result.move_date_flexible)
    const navigate = useNavigate()
    const handleClick = () => {
      console.log()
    }
  return (
    <div className='main-page'>
      <div className='first-row'>
        <section className='from-section'>
          <p>From</p>
          <p className='sub-line'>{props.result.from_address.fromAddress}</p>          
        </section>
        <span className="material-symbols-outlined">arrow_right_alt</span>
        <section className='to-section'>
          <p>To</p>
          <p className='sub-line'>{props.result.to_address.toAddress}</p>
        </section>
        <section className='request-section'>
          <p>Request</p>
          <p className='sub-line'>{props.result.estimate_id}</p>
        </section>
      </div>
      <div className='second-row'>
        <div className='bhk-section'>
          <span className="material-symbols-outlined">home</span>
          <p>{props.result.property_size}</p>
        </div>  
        <div className='items-section'>
          <span className="material-symbols-outlined">category</span>
          <p>{props.result.total_items}</p>
        </div>
        <div className='distance-section'>
          <span className="material-symbols-outlined">distance</span>
          <p>{props.result.distance}</p>
        </div>
        <div className='date-section'>
          <span className="material-symbols-outlined">calendar_month</span>
          <p>{props.result.moving_on}</p>
        </div>
        <div className='flexible-section'>
          { props.result.move_date_flexible === "1" ? <input type="checkbox" checked></input> : <input type="checkbox"></input> }
          <p>is Flexible</p>
        </div>
        <button type='submit' onClick={handleClick}>View more details</button>
        <button type='submit'>Quotes awaiting</button>
      </div>
      <div className='warning-section'>
        <span class="material-symbols-outlined">warning</span>
        <p><b>Disclaimer :</b>Please update your move date before two days of shifting</p>
      </div>
    </div>
  
  )
}

//<span class="material-symbols-outlined">distance</span>