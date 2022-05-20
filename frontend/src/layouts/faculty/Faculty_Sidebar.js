import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import icon from "../../static/images/faculty-icon.png";
import "../../static/navigation.css";

const Sidebar = () => {
    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        localStorage.removeItem('auth_role');
        localStorage.removeItem('auth_status');
        
        Swal.fire({
            title: 'Confirm Log Out',
            text: "Are you sure you want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                history.push('/login');
            }
        })
    }

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sidenav-icon-container">
                <img class="icon" src={icon}></img>
                <div class="sidenav-log-container">
                    <p class="log-status">Faculty</p>
                </div>
            </div>
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link-side" to="/faculty/Profile"><a>Profile</a></Link>
                    <Link className="nav-link-side" to="/faculty/Completion_Request"><a>Completion Request</a></Link>
                    <Link className="nav-link-side" to="/faculty/Completion_List"><a>Completion List</a></Link>
                    <Link className="nav-link-side" onClick={logoutSubmit} ><a>Logout</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;