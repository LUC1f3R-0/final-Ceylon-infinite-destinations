import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <>
            <NavBar />
            <main className="main-content">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
