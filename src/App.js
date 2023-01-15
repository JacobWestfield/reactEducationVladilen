import React, { useState } from "react";
import API from "./fake.api/index.js";
import "bootstrap/dist/css/bootstrap.css";
import UsersList from "./components/usersList.jsx";
import Header from "./components/header.jsx";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    const [bookmark, setBookmark] = useState();
    const handleBookmark = (user) => {
        user.bookmark = !user.bookmark;
        setBookmark((prev) => !prev);
    };

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const renderPhrase = (number) => {
        if (number === 0) return "Никто c тобой не тусанёт сегодня";
        if (number > 4) return `${number} человек тусанут c тобой сегодня`;
        if (number > 1 && number < 5) {
            return `${number} человека тусанут c тобой сегодня`;
        }
        if (number === 1) return `${number} человек тусанёт c тобой сегодня`;
    };

    return (
        <>
            <Header
                bootstrapStyle={
                    users.length
                        ? "badge bg-primary p-2"
                        : "badge bg-danger p-2"
                }
                phrase={renderPhrase(users.length)}
            />
            <UsersList
                usersList={users}
                deletion={handleDelete}
                handleBookmark={handleBookmark}
            />
        </>
    );
}

export default App;
