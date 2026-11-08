import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = async () => {
        await authService.logout();
        dispatch(logout());
    }

    return (
        <button
            onClick={logoutHandler}
            className='inline-block px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200'
        >
            Logout
        </button>
    )
}

export default LogoutBtn