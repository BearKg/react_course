import React from "react";

    function Person({name, nickName, images}) {
      return (
        <div>
          <h3>{name}</h3>
          <h4>{nickName}</h4>
          <img src={images} alt="" />
        </div>
      )
    }

export default Person
  
  