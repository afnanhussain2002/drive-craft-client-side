import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success,setSuccess] = useState('')
    const [err, setErr] = useState('')

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const userPhoto = form.photo.value;
        const password = form.password.value;

        const userInfo = {name,email,userPhoto,password};
        console.log(userInfo);

        setErr('')
        setSuccess('')
        if (password.length < 6) {
           setErr('Password need to minimum 6 character or more')
           return;
        }else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).+$/.test(password))  {
           setErr('you have to use a capital latter and a special character')
           return;
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: userPhoto
              }).then(() => {
                
              }).catch((error) => {
                setErr(error.message)
                
              });
              setSuccess('User Created Succsessfully')
        })
        .catch(error =>{
            console.log(error.message);
            setErr(error.message)
        })
    }


  return (
    <>
      <div className=" flex items-center justify-center h-screen" style={{background:'url(https://i.pinimg.com/originals/1b/74/81/1b74816e56e5a554d91fa3923f565367.jpg) center '}}>
        <div className="p-8 rounded shadow-md w-96 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-whiteleading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-whiteleading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="text"
                placeholder="Photo URL"
                name="photo"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-whiteleading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-whiteleading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div>
                <h3 className='text-center font-bold text-red-500'>{err}</h3>
                <h3 className='text-center font-bold text-green-500'>{success}</h3>
              </div>
          <h3 className="text-white">If You already have any account please <span className="font-bold underline"><Link to={'/login'}>Login</Link></span></h3>

        </div>
      </div>
    </>
  );
};

export default Register;
