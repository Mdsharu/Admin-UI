import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import styles from "./UsersList.module.css";

const config = {}
config.PAGE_SIZE = 10   // Each page should have 10 users(pagination)

// User Component
const User = (props) => {
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  // The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  return (
    <tr key={user.id} className={user.selected ? styles.selected : ""}>
      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={nameRef}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="email"
          ref={emailRef}
          name="email"
          defaultValue={user.email}
        />
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={roleRef}
          name="role"
          defaultValue={user.role}
        />
      </td>
      <td className={styles.icons}>
        {user.edit ? (
          <i onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)} className="fas fa-save"></i>
        ) : (
          <i onClick={() => editUser(user.id)} className="fas fa-edit"></i>
        )}

        <i onClick={() => deleteUser(user.id)} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  );
};


const UsersList = (props) => {
  const { users, deleteUser, editUser, saveUser, selectAll, selectOne, selectAllRef, setPage, page } = props;

  useEffect(() => {
    if (users.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage, users.length]);

  let fillRows = [];

  for (let i = users.filter((user) => user.show).length; i < config.PAGE_SIZE; i++) {
    fillRows.push(<tr key={i}></tr>);
  }

  if (users.length === 0 && page === 1) {
    return <div>NO USERS IN THE SYSTEM</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              ref={selectAllRef}
              onChange={(e) => {
                selectAll(e);
              }}
              name="selectAll"
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return user.show ? (
            <User
              user={user}
              deleteUser={deleteUser}
              selectOne={selectOne}
              saveUser={saveUser}
              editUser={editUser}
              key={user.id}
            ></User>
          ) : (
            ""
          );
        })}
        {fillRows}
      </tbody>
    </table>
  );
};

// PropTypes ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.

UsersList.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  saveUser: PropTypes.func,
  selectAll: PropTypes.func,
  selectOne: PropTypes.func,
  selectAllRef: PropTypes.object,
  setPage: PropTypes.func,
  page: PropTypes.number,
};

export default UsersList;
