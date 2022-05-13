import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&  
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Difference between start date and end date should be less than 7 days!</strong>
      </div>
  )
}
