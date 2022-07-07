import React from 'react'
import SideBar from '../Sidebar/Sidebar'
// import Topbar from '../Topbar'
import "./Reservation.css"
function Reservation() {
  return (
  <>
 
 <div className='container-fluid'>
 <div className='row'>
     <div className='col-4'>
     <SideBar/>
     </div>
 </div>
 <div className='col-8 mx-5 mt-5'>            
  <div class="container">
             <form className='reserve'>
             <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">RoomType</label>
    <div class="col-4">
    <select class="form-select"  aria-label="Default select example">
  <option selected>-Select-</option>
  <option value="1">Single</option>
  <option value="2">Double</option>
  <option value="3">Triple</option>
  
</select>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">Check In</label>
    <div class="col-4">
      <input type="date" class="form-control" id="inputEmail3"/>
    </div>
    </div>
   
  
  <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">Check Out</label>
    <div class="col-4">
      <input type="date" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  
  <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">Number Of Rooms</label>
    <div class="col-4">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">Number Of Adults</label>
    <div class="col-4">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-4 col-form-label">Number Of Child</label>
    <div class="col-4">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  
  </div>
  <div class="col-12 checkbtn mx-5  mb-4 mt-4">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className='btn d-flex gap-5'>
  
  <button type="submit" class="btn btn-primary ">Submit</button>
  <button type="submit" class="btn btn-outline-secondary ">Reset</button>
</div></form>
  </div>
  </div>
 
 </div>

 </>
  )
}

export default Reservation