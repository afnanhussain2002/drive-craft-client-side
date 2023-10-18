import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {users,logOut} = useContext(AuthContext)
 
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/addproduct"}>Add Product</Link>
              </li>
              <li>
                <Link to={"/cart"}>My Cart</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
          <img className="w-56" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/addproduct"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/cart"}>My Cart</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
          {users&&
        <div className="navbar-end">
              <a onClick={handleLogOut} className="btn">LogOut</a>  
        </div>
          }
         
      </div>
    </div>
  );
};

export default Navbar;
