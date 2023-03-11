import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <ul className="navbar-nav">
            <li>
                <Link href={'/auth/user_login'}>
                    <div className="nav-link login-btn">LOGIN</div>
                </Link>
            </li>
            <li>
                <Link href={'/auth/create_account'}>
                    <div className="nav-link login-btn">ACCOUNT</div>
                </Link>
            </li>
            <li><a className="nav-link buy-btn" href="#productDiv">BUY NOW</a></li>
        </ul>
    )
}
