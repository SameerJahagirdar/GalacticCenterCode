import React from 'react'
import CardItem from './CardItem'

export default function Cards(props) {
  let {data,date}=props;
  return (
    <>
      <div className="container my-3">
        <div className="row">
        {data.near_earth_objects[date]?.map((firstarr) => {
          return (
            <>
              <div className="col-md-4 float-inline ">
                <CardItem key={firstarr.id} ID={firstarr.id} name={firstarr.name} absolute_magnitude_h={firstarr.absolute_magnitude_h} estimated_diameter={firstarr.estimated_diameter} is_potentially_hazardous_asteroid={firstarr.is_potentially_hazardous_asteroid} close_approach_data={firstarr.close_approach_data} nasa_jpl_url={firstarr.nasa_jpl_url}/>
              </div>
            </>
          )
        })}
         </div>
      </div>
      </>
      )
}
