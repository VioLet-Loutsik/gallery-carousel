import React from 'react'

const Skeleton = ({ item }) => {
    return [...Array(item).keys()].map(() => (
      <div className="animate-pulse">
        <div></div>
      </div>
    ))
  }
  
  export default Skeleton;
  