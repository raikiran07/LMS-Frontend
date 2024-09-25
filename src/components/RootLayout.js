import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from './NavBarComponent'



export default function RootLayout(){
    
    return (
        <>
        <Outlet />
        </>
    )
}