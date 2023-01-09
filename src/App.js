import React, {useState} from 'react';
import API from './fake.Api/fakeApi.js';
import "bootstrap/dist/css/bootstrap.css";
import UsersList from './components/usersList.jsx';
import Header from './components/header.jsx';


function App() {

  let phrase;
  
  const [users, setUsers] = useState(API.users.fetchAll());
  

  /*Долго не мог понять как сделать это задание. Т.к. мы еще не освоили useEffect то мне пришлось запускать
  рендер искуственно через стейт всего приложения bookmark, при этом нужно было изменять 
  свойство каждого юзера по отдельности что и ввело меня в тупик. 
  Стейт у каждого юзера не помог решить проблему, потому что не обновлялся рендер всего приложения и иконка не менялась */
  
  const [bookmark, setBookmark] = useState();
  const handleBookmark = (user) => {
    user.bookmark = !user.bookmark //в качестве аргумента прилетает юзер из компонента User и я внаглую меняю значение его поля bookmark (возможно это некорректно)
    setBookmark((prev) => !prev)
  }
  
  const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
        console.log(userId)
  }


  const renderPhrase = (number) => {
    if (number === 0) return 'Никто c тобой не тусанёт сегодня';
    if (number >4) return `${number} человек тусанут c тобой сегодня`;
    if (number > 1 && number < 5) return `${number} человека тусанут c тобой сегодня`;
    if (number === 1) return `${number} человек тусанёт c тобой сегодня`
  }

  if (!users.length) {
    phrase = renderPhrase(users.length)
  }


  return (<>
  <Header bootstrapStyle={users.length ? 'badge bg-primary p-2' : 'badge bg-danger p-2'} phrase={renderPhrase(users.length)} />
  <UsersList usersList={users} deletion={handleDelete} handleBookmark={handleBookmark} />
  </>);
}

export default App;