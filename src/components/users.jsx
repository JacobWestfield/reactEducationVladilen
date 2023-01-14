import React, { useState } from "react";
import API from "../fake.api/fakeApi.js";
import "bootstrap/dist/css/bootstrap.css";

function Users() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    if (number === 0) return "Никто c тобой не тусанёт сегодня";
    if (number > 4) return `${number} человек тусанут c тобой сегодня`;
    if (number > 1 && number < 5)
      return `${number} человека тусанут c тобой сегодня`;
    if (number === 1) return `${number} человек тусанёт c тобой сегодня`;
  };

  if (!users.length) {
    return (
      <h1>
        <span className="badge bg-danger p-2">
          {renderPhrase(users.length)}
        </span>
      </h1>
    );
  }

  return (
    <>
      <h1>
        <span className="badge bg-primary p-2">
          {renderPhrase(users.length)}
        </span>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality, index) => (
                    <span
                      key={index}
                      className={`badge rounded-pill bg-${quality.color}`}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Users;
