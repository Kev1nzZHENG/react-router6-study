import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    function forward() {
        navigate(1);
    }

    function back() {
        navigate(-1);
    }

    return (
        <div>
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={back}>后退</button>
                    <button onClick={forward}>前进</button>
                </div>
            </div>

        </div>
    )
}
