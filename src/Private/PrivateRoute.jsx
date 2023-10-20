import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return(
            <div className="flex items-center justify-center space-x-2 animate-bounce">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
           </div>  
        )
            
    }
    if (users) {

        return children
        
    }
    
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};
PrivateRoute.propTypes={
    children: PropTypes.node
}
export default PrivateRoute;