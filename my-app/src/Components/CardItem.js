
import React from 'react'

export default function CardItem(props) {
    let {ID,name,absolute_magnitude_h,estimated_diameter,is_potentially_hazardous_asteroid,close_approach_data,nasa_jpl_url}=props;
  return (
    <>
      <div className={`card text-white bg-${!is_potentially_hazardous_asteroid ? 'warning' : 'danger'} mb-3`} style={{ width: "22rem" }}>
        <div className="card-header">{name} <span className='mx-2'>ID = {ID}</span> </div>
        <h6 className='mx-2'>Absolute Magnitude={absolute_magnitude_h}</h6>
        <h6 className='mx-2'>Estimated Diameter={(estimated_diameter.kilometers.estimated_diameter_min+estimated_diameter.kilometers.estimated_diameter_max)/2} Km</h6>
        <div className='mx-2'>{close_approach_data.map((ele)=>{
          return(
          <>
            <h6>Relative Vel = {ele.relative_velocity.kilometers_per_second}</h6>
            <h6>Close Approach Date = {ele.close_approach_date}</h6>
            <h6>Miss Distance = {ele.miss_distance.kilometers} Km</h6>
            </>
          )
        })}</div>
        <div className="card-body">
          <a href={nasa_jpl_url} className='btn btn-success' target="_blank" rel="noopener noreferrer">Read More</a> 
        </div>
      </div>
    </>
  )
}

