import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
    const {createUser,google} = useContext(AuthContext)
    const navigate = useNavigate()
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
            
              fetch('https://b8a10-brandshop-server-side.vercel.app/users',{
              method:'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(userInfo)
            })
            .then(res =>res.json())
            .then(data =>{
              console.log(data);
            })
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: userPhoto
              }).then(() => {
                
              }).catch((error) => {
                setErr(error.message)
                
              });
              
              setSuccess('User Created Succsessfully')
              navigate(location?.state? location.state: '/')
        })
        .catch(error =>{
            console.log(error.message);
            setErr(error.message)
        })
    }

    const handleGoogleSign = () =>{
      google()
      .then(result =>{
          console.log(result.user)
          navigate(location?.state? location.state: '/')
      })
      .catch(error =>{
          console.log(error.message)
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
                className="bg-black w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          {/* sign with social media */}
          <div className="my-2">
        <a href="#">
            <button onClick={handleGoogleSign} className=" w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
                <span className="dark:text-gray-300">
                    Sign with Google
                </span>
            </button>
        </a>

        <a href="#">
            <button className=" w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className="dark:text-white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="dark:text-gray-300">
                    Sign with Github
                </span>
            </button>
        </a>
    </div>
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
