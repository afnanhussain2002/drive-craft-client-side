import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value;
        const user = {email,password}

        console.log(user);
        setError('')
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div>
             <div className=" flex items-center justify-center h-screen" style={{background:'url(https://i.pinimg.com/originals/1b/74/81/1b74816e56e5a554d91fa3923f565367.jpg) center '}}>
        <div className="p-8 rounded shadow-md w-96 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>
          <form onSubmit={handleLogin}>
    
           
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
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <h3 className="text-center text-red-500 font-bold">{error}</h3>
          <h3 className="text-white">If You did not have any account please <span className="font-bold underline"><Link to={'/register'}>Register</Link></span></h3>
        </div>
      </div>
        </div>
    );
};

export default Login;