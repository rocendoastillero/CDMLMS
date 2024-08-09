import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function TestLayout({ children }) {

    const [isOpen , setOpen] = useState(true);

    return (
        <div className={`nav-fixed ${isOpen ? "" : "sidenav-toggled"}`}>
            <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white">
                <button className="w-5 h-5" onClick={()=>setOpen(!isOpen)}>

                </button>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sidenav shadow-right sidenav-light">
                        <div className="sidenav-menu">
                            <div className="nav accordion" id="accordionSidenav">
                                <div class="sidenav-menu-heading">Core</div>
                                <Link className="nav-link">
                                    Dashboard
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    {children}
                </div>
            </div>
        </div>
    )
}