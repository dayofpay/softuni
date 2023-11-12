import { useEffect, useState } from "react";
import Head from "./Head";
import User from "./User";
import AddUser from "../Modals/AddUser";

export default function Table() {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const addBtn = () => {
    setShowAddUserModal(true);
  }
  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/users/')
      .then((response) => response.json())
      .then((data) => {
        const result = Object.values(data);
        setUser(result);
      })
      .catch((err) => {
        setError("Failed to fetch data.");
      });
  }, []);

  return (
    <>
      {error ? (
        <div class="loading-shade">
        <div className="table-overlap">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="triangle-exclamation"
            className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
            ></path>
          </svg>
          <h2>{error}</h2>
        </div>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <Head />
            <tbody>
              {users.map((user, index) => (
                <User
                  id={user._id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  phoneNumber={user.phoneNumber}
                  createdAt={user.createdAt}
                  key={index}
                />
              ))}

              
            </tbody>
          </table>
          
        </div>
        
      )}

      <button className="btn-add btn" onClick={addBtn}>Add new user</button>
      {showAddUserModal && (
        <AddUser onClose={() => setShowAddUserModal(false)} />
      )}
    </>
  );
}
