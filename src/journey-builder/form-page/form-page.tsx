import { useNavigate } from 'react-router-dom';

function FormPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default FormPage;