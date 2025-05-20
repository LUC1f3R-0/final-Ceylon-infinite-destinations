import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const [count, setCount] = React.useState(6);

    React.useEffect(() => {

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev === 1) {
                    clearInterval(interval);
                    React.startTransition(() => {
                        navigate('/');
                    });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [navigate]);
    return (
        <>
            <h1>not found</h1>
            redirecting{count}
        </>
    )
}

export default NotFound