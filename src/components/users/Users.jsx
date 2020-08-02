import React from "react";

import User from "../user/User";
import "./users.scss";

const Users = props => {
  const { users } = props;
  return (
    <div className="user-cards-box">
      <h3 className="user-cards-title">Users</h3>
      <ul className="users-list">
        {users.map(user => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default Users;