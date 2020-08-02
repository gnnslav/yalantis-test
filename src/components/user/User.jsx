import React from "react";

//import {MONTHS} from '../../untils/monthsString';

import "./user.scss";

const User = props => {
  const { firstName, lastName, dob } = props.user;
  
  // const birthdayDate = ()=>{
  //   const date = new Date(dob);
  //   const month = date.getMonth();
  //   const day = date.getDate();

  //   console.log(month, day);
  // }
  // birthdayDate();
  return (
    <li>
      <table className="user-card">
        <tbody>
          <tr>
            <td className="user-card__item">First Name</td>
            <td className="user-card__item">{firstName}</td>
          </tr>
          <tr>
            <td className="user-card__item">Last Name</td>
            <td className="user-card__item">{lastName}</td>
          </tr>
          <tr>
            <td className="user-card__item">Date of Birthday</td>
            <td className="user-card__item">{dob}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};
export default User;