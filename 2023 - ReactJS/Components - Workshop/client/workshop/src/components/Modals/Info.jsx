import { useEffect , useState} from "react";
import { getUserInfo } from "../../services/user";
export default function Info(props){


    const [userData,setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/users/${props.data}`)
        .then((response) => response.json())
        .then((data) => {
          const result = data;
          setUserData(result);
        });
    },[props.data])
    const handleCloseModal = () => {
        if (props.onClose) {
          props.onClose();
        }
      };

      if (userData.length === 0) {
        return <div className="spinner"></div>;
      }
      console.log(userData);
    return (
        <div className="overlay">
      <div className="backdrop" onClick={handleCloseModal}></div>
      <div className="modal">
        <div className="detail-container">
          <header className="headers">
            <h2 style={{color:'black'}}>User Detail</h2>
            <button className="btn close" onClick={handleCloseModal}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
          </header>
          <div className="content">
            <div className="image-container">
              <img src={userData?.['imageUrl']} alt=""
                className="image" />
            </div>
            <div className="user-details">
              <p style={{color: 'black'}}>User Id: <strong>{userData?.["_id"]}</strong></p>
              <p style={{color: 'black'}}>
                Full Name:
                <strong> Peter Johnson </strong>
              </p>
              <p style={{color: 'black'}}>Email: <strong>{userData?.["email"]}</strong></p>
              <p style={{color: 'black'}}>Phone Number: <strong>{userData?.["phoneNumber"]}</strong></p>
              <p style={{color: 'black'}}>
                Address:
                <strong> {userData?.["address"]["street"]} </strong>
              </p>

              <p style={{color: 'black'}}>Created on: <strong>{userData?.["createdAt"]}</strong></p>
              <p style={{color: 'black'}}>Modified on: <strong>{userData?.["updatedAt"]}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}