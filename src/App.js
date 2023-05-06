import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import UsersList from "./components/UsersList/UsersList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [page, setPage] = useState(1);
  const selectAllRef = useRef(null);

  const config = {}
  config.PAGE_SIZE = 10   // Each page should have 10 users

  const processUsersResponse = (users)=> {
    return users.map(user => {
        user.selected = false;
        user.edit = false;
        user.show = true;
        return user;
    })
  }

  const fetchUsers = (setUsers) => {
    const url ="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    axios.get(url).then((res) => {
        setUsers(processUsersResponse(res.data));
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  const searchInUsers = (search, users) => {
    let tempSearch = search.toLowerCase();
    return users.map((user) => {
      if (
        user.name.toLowerCase().includes(tempSearch) ||
        user.email.toLowerCase().includes(tempSearch) ||
        user.role.toLowerCase().includes(tempSearch)
      ) {
         user.show = true;
         return user;
      }
      user.show = false;
      return user;
    });
  };

  const searchUsers = (e) => {
    setPage(1);
    setUsers(searchInUsers(e.target.value, users));
  };

  const deleteUser = (id) => {
    let tempUsers = users.filter((user) => user.id !== id);
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);
  };

  const editUser = (id) => {
    let tempUsers = users;
    const index = tempUsers.findIndex((user) => user.id === id);
    tempUsers[index].edit = true;
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);
  };

  const saveUser = (id, nameRef, emailRef, roleRef) => {
    let tempUsers = users;
    const index = tempUsers.findIndex((user) => user.id === id);
    tempUsers[index].name = nameRef.current.value;
    tempUsers[index].email = emailRef.current.value;
    tempUsers[index].role = roleRef.current.value;
    tempUsers[index].edit = false;
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);
  };

  const selectOne = (id) => {
    let tempUsers = users;
    const index = tempUsers.findIndex((user) => user.id === id);
    tempUsers[index].selected = !tempUsers[index].selected;
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);
  };

  const selectAll = (e) => {
    const listedUserIds = users
      .filter((user) => user.show)
      .slice(index, index + config.PAGE_SIZE)
      .map((user) => user.id);

    let tempUsers = users.map((user) => {
      if (listedUserIds.includes(user.id)) {
        user.selected = e.target.checked;
        return user;
      }
      return user;
    });

    setUsers(tempUsers);
    setUpdate(!update);
  };

  const deleteSelected = () => {
    if (window.confirm("The Selected users will be deleted")) {
      setUsers((prevState) => prevState.filter((user) => !user.selected));
      selectAllRef.current.checked = false;
    }
  };

  const getRecordIndex = (page) => {
    return (page-1) * config.PAGE_SIZE ;
  }

  const index = getRecordIndex(page);

  return (
    <div className="App">
      <input
        className="search"
        type="text"
        placeholder="Search by Name, Email or Role"
        onChange={searchUsers}
      ></input>
      <UsersList
        page={page}
        setPage={setPage}
        selectAll={selectAll}
        selectAllRef={selectAllRef}
        selectOne={selectOne}
        saveUser={saveUser}
        editUser={editUser}
        deleteUser={deleteUser}
        users={users.filter((user) => user.show).slice(index, index + config.PAGE_SIZE)}
      ></UsersList>
      <Pagination
        usersLength={users.filter((user) => user.show).length}
        page={page}
        setPage={setPage}
        deleteSelected={deleteSelected}
      ></Pagination>
    </div>
  );
}

