import React from "react";
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Logo from "./logo.svg";

// import "./Navbar.css";
// import logo from '../../Assets/logo-black.png'
// import searchicon from '../../Assets/search-b.png'

{/* <div className="navbar"> */ }
{/* <img src={logo} alt="" className='logo'/> */ }
{/* <ul>
<li><Link to="/HomePage">ראשי</Link></li>
<li><Link to="/HomeStudent">תלמידים</Link></li>
<li><Link to="/HomeTeacher">מורים</Link></li>
<li><Link to="/HomeParent">הורים</Link></li>
<li>אודות</li>
</ul>

<div className="search-box">
<input type="text" placeholder='Search'/> */}
{/* <img src={searchicon} alt=""/> */ }
// </div>

// </div>

const items = [
    {
        label: 'ראשי',
    },
    {
        label: 'תלמידים',
        items: [
            {
                label: 'הרשמה',
            },
            {
                label: 'התחברות',
            },
        ]
    },
    {
        label: 'מורים',
        items: [
            {
                label: 'הרשמה',
            },
            {
                label: 'התחברות',
            },
        ]
    },
    {
        label: 'הורים',
        items: [
            {
                label: 'הרשמה',
            },
            {
                label: 'התחברות',
            },
        ]
    },
    {
        label: 'אודות',
    }
];

const Navbar = () => {
    const start = <img src={Logo} className="w-12" />;
    const end = (
        <div className="flex align-center gap-2">
            <InputText placeholder="חיפוש" type="text" className="w-8rem sm:w-auto" />
            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
        </div>
    );

    return (
        <>
            <Menubar dir="rtl" model={items} start={start} end={end} pt={{
                end: {
                    className: 'mr-auto ml-0'
                },
            }}/>
        </>
    );
};

export default Navbar;
