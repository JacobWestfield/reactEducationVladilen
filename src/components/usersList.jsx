import React from 'react';
import User from './user';


function UsersList({usersList, deletion, handleBookmark}) {

  return (<>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope='col'>Bookmark</th>
            </tr>
        </thead>
        <tbody>
        {usersList.map(user => {
            return (
                <User key={user._id} handleBookmark={handleBookmark} userData={user} deletion={deletion}/>
            )
        })}
        </tbody> 
    </table>
    </>
    );
}

export default UsersList;