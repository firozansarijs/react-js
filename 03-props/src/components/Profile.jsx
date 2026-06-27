import React from 'react'

const Profile = (props) => {
    console.log(props);
  return (
      <div className="parent">
    <div className="card">
  <img
  src={props.img}
/>
      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, officia!</p>
      <button>view profile</button>
    </div>
   </div>
  )
}

export default Profile