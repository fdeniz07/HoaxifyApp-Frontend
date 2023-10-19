import React, { useCallback, useEffect, useState } from "react";
import loadUsers from "./api";
import { Button } from "react-bootstrap";

const UserList = () => {
  const [userPage, setUserPage] = useState({
    content: [],
    last: false,
    first: true,
    number:0
  });

const getUsers = useCallback(async() => {
    const response = await loadUsers();
    setUserPage(response.data);
},[])

  //Backenden datalari cekiyoruz
  useEffect(() => {   
    getUsers();
  }, []);

  return (
    <>
      <div>UserList</div>
      {userPage.content.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
      <Button variant="warning">Previous</Button>
      <Button variant="success">Next</Button>
    </>
  );
};

export default UserList;
