import React, { useState } from "react";
import Button from "./button";
import "bootstrap/dist/css/bootstrap.css";
import Bookmark from "./bookmark";

const User = ({ userData, deletion, handleBookmark }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>
        {userData.qualities.map((quality, index) => (
          <span
            key={index}
            className={`badge rounded-pill bg-${quality.color}`}
          >
            {quality.name}
          </span>
        ))}
      </td>
      <td>{userData.profession.name}</td>
      <td>{userData.completedMeetings}</td>
      <td>{userData.rate}</td>
      <td>
        <Bookmark
          handleBookmark={() => handleBookmark(userData)}
          bookmark={userData.bookmark}
        />
      </td>
      <td>
        <Button deletion={() => deletion(userData._id)} />
      </td>
    </tr>
  );
};

export default User;
