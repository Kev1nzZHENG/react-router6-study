import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {

    function computedNavLinkActive({ isActive }) {
        return isActive ? 'list-group-item atguigu' : 'list-group-item'
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className={computedNavLinkActive} to="/about">About</NavLink>
                        <NavLink className={computedNavLinkActive} to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            <Routes>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/home" element={<Home />}></Route>
                                <Route path="/" element={<Navigate to="/about" />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
