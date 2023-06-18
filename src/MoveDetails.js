import { Collapse } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function MoveDetails(props) {
  const [open , setOpen] = useState(false)
  const [inventoryOpen , setInventoryOpen] = useState(-1)
    console.log(props.result.items.inventory)
    //props.result.old_house_additional_info
    const handleClick = () => {
      setOpen(!open)
    }
  return (
    <>
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
        <span className="material-symbols-outlined">warning</span>
        <p><b>Disclaimer :</b>Please update your move date before two days of shifting</p>
      </div>
    </div>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <div className='additional-details'>
        <h6><b>Additional Information</b></h6>
        <button>Edit Additional info</button>
      </div>
      <div className='additional-info-text'>
        {props.result.old_house_additional_info}{props.result.new_house_additional_info}
      </div>
      <section className='house-details'>
        <div className='house-heading'>
          <h6><b>House Details</b></h6>
          <button>Edit House info</button>
        </div>
        <div className='existing-house-details'>
          <h6><b>Exising House Details</b></h6>
          <div className='existing-house-content'>
          <div className='floor-details'>
            <p>Floor No</p>
            <p>{props.result.old_floor_no}</p>
          </div>
          <div className='elevator-details'>
            <p>Elevator Available</p>
            <p>{props.result.old_elevator_availability}</p>
          </div>
          <div className='distance-details'>
          <p>Distance From Elevator / Staircase to truck</p>
          <p>{props.result.old_parking_distance}</p>
          </div>
          </div>
        </div>
        <div className='existing-house-details'>
          <h6><b>New House Details</b></h6>
          <div className='new-house-content'>
          <div className='floor-details'>
            <p>Floor No</p>
            <p>{props.result.new_floor_no}</p>
          </div>
          <div className='elevator-details'>
            <p>Elevator Available</p>
            <p>{props.result.new_elevator_availability}</p>
          </div>
          <div className='distance-details'>
          <p>Distance From Elevator / Staircase to truck</p>
          <p>{props.result.new_parking_distance}</p>
          </div>
          </div>
        </div>
      </section>
      <section className="inventory-details">
      <div className='invnetory-heading'>
          <h6><b>Inventory Details</b></h6>
          <button>Edit Inventory</button>
        </div>
      </section>
      <div className='inventory-list'>
      {props.result.items.inventory.map((item,index) => {
        return (
          <React.Fragment>
          <li key={index}>{item.displayName} {item.category.length}
          <IconButton
            onClick={() => setInventoryOpen(inventoryOpen === index ? -1 : index)}
          >
          {inventoryOpen === index ? (
            <KeyboardArrowUpIcon/>
          ) : (
          <KeyboardArrowDownIcon/>
          ) } 
          </IconButton></li>
          </React.Fragment>
        )
      })}
      </div>
      <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
        {props.result.items.inventory.map((item) => {
          return (
            <>{item.category.map((list) => {
              return (
                <li>{list.displayName} {list.items.length}</li>
              )
            })}</>
          )
        })
        }
      </Collapse>
    </Collapse>
    </>

  )
}
