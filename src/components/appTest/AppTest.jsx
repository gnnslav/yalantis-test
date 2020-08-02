import React, {useState, useEffect} from 'react';

import getService from '../../services/apiService';

import Users from '../users/Users';
import Months from '../months/Months';
import Tooltip from '../tooltip/Tooptip';

import { MONTHS } from '../../untils/monthsString';

import './appTest.scss';

const AppTest = ()=>{
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState({});
    const [reckTooltip, setReckTooltip] = useState({});
    const service = new getService();

    useEffect(() => {
        getUsers();
      }, []);
    
      const getUsers = () => {
        const response = service.getService();
        response.then(data => {
          setUsers(
            data.map(user=>{
              const date = new Date(user.dob);
              const month = MONTHS[date.getMonth()];
              const day = date.getDate();
              return {
                ...user,
                dob: `${day} ${month}`
              }
            })
          );
        });
      };
      
      const getBirthdayMonth = (item)=>{
        const date = new Date(item);
        const month = date.getMonth();
        return month;
      }

      const numberOfBirthday = () => {
        return users.reduce((result, item) => {
          const month = getBirthdayMonth(item.dob);
          result[month] = (result[month] || 0) + 1;
          return result;
        }, {});
      };
    
      const usersByMonthOfBirsday = index => {
        const filteredArr = users.filter(item => {
          const month = getBirthdayMonth(item.dob);
          return month === index;
        });
        setFilteredUsers(filteredArr);
      };

      const reckObj = ({ left, top, width }) => {
        setReckTooltip({
          left,
          top,
          width
        });
      };
    

    return(
        <div className="container">
            <div className="months">
                <Months
                numberOfBirthday={numberOfBirthday()}
                usersByMonthOfBirsday={usersByMonthOfBirsday}
                reckObj={reckObj}
                />
                {filteredUsers !== {} ? (
                <Tooltip filteredUsers={filteredUsers} reckTooltip={reckTooltip} />
                ) : null}
            </div>
            <div className="users">
                <Users users={users} />
            </div>
    </div>
    );
}

export default AppTest;