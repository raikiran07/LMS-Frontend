import {useNavigate} from 'react-router-dom'



const Backbutton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
            navigate(-1);
    }


    return (
        <div onClick={handleBack}>
            &#60;
        </div>
    )
}

export default Backbutton;