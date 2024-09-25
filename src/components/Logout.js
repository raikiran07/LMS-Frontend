import logout from '../images/mainLogout.png'
import {useNavigate} from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }


    return (
        <div className="logout" onClick={handleLogout}>
            <img src={logout} />
        </div>
    )
}

export default Logout;