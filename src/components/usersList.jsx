import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

function UsersList({ usersList, deletion, handleBookmark }) {
    const pageConfig = {
        usersCount: usersList.length,
        pageSize: 4
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
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

UsersList.propTypes = {
    usersList: PropTypes.array.isRequired,
    deletion: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default UsersList;
