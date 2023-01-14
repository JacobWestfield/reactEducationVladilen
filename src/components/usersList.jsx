import React, { useState } from "react";
import Pagination from "../app/pagination";
import User from "./user";

function UsersList({ usersList, deletion, handleBookmark }) {
  const pageConfig = {
    usersCount: usersList.length,
    pageSize: 4,
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };

  const userCrop = paginate(usersList, currentPage, pageConfig.pageSize);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Bookmark</th>
          </tr>
        </thead>
        <tbody>
          {userCrop.map((user) => {
            return (
              <User
                key={user._id}
                handleBookmark={handleBookmark}
                userData={user}
                deletion={deletion}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        itemsCount={pageConfig.usersCount}
        pageSize={pageConfig.pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UsersList;
