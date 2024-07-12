import { useState } from 'react'
import PageHeader from "@/Components/CDMLMS/PageHeader";
import { Link } from "@inertiajs/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Tests() {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div className="nav-fixed">
                <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
                    id="sidenavAccordion">
                    <button onClick={() => { setIsOpen(!isOpen) }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">

                        <Bars3Icon className="!h-2 !w-2 text-gray-400" />

                    </button>
                    <Link className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">
                        CDM LMS
                    </Link>
                    <form className="form-inline me-auto d-none d-lg-block me-3">
                        <div className="input-group input-group-joined input-group-solid">
                            <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-text"><i data-feather="search"></i></div>
                        </div>
                    </form>
                    <ul className="navbar-nav align-items-center ms-auto">
                        <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="fw-500">Documentation</div>
                                <i className="fas fa-chevron-right dropdown-arrow"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up"
                                aria-labelledby="navbarDropdownDocs">
                                <Link className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Documentation</div>
                                        Usage instructions and reference
                                    </div>
                                </Link>
                                <div className="dropdown-divider m-0"></div>
                                <Link className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components"
                                    target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="code"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Components</div>
                                        Code snippets and reference
                                    </div>
                                </Link>
                                <div className="dropdown-divider m-0"></div>
                                <Link className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog"
                                    target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="file-text"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Changelog</div>
                                        Updates and changes
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-caret me-3 d-lg-none">
                            <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                    data-feather="search"></i></Link>
                            <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline me-auto w-100">
                                    <div className="input-group input-group-joined input-group-solid">
                                        <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div className="input-group-text"><i data-feather="search"></i></div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                            <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts"
                                href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"><i data-feather="bell"></i></Link>
                            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                                aria-labelledby="navbarDropdownAlerts">
                                <h6 className="dropdown-header dropdown-notifications-header">
                                    <i className="me-2" data-feather="bell"></i>
                                    Alerts Center
                                </h6>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">
                                    <div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity"></i></div>
                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                                        <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing
                                            serious, but it requires your attention.</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">
                                    <div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                                        <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click
                                            here to view!</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">
                                    <div className="dropdown-notifications-item-icon bg-danger"><i
                                        className="fas fa-exclamation-triangle"></i></div>
                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                                        <div className="dropdown-notifications-item-content-text">Critical system failure, systems
                                            shutting down.</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">
                                    <div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                                        <div className="dropdown-notifications-item-content-text">New user request. Woody has requested
                                            access to the organization.</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                            <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages"
                                href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"><i data-feather="mail"></i></Link>
                            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                                aria-labelledby="navbarDropdownMessages">
                                <h6 className="dropdown-header dropdown-notifications-header">
                                    <i className="me-2" data-feather="mail"></i>
                                    Message Center
                                </h6>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">

                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                        <div className="dropdown-notifications-item-content-details">Thomas Wilcox · 58m</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">

                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                        <div className="dropdown-notifications-item-content-details">Emily Fowler · 2d</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">

                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                        <div className="dropdown-notifications-item-content-details">Marshall Rosencrantz · 3d</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-item" href="#!">

                                    <div className="dropdown-notifications-item-content">
                                        <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                        <div className="dropdown-notifications-item-content-details">Colby Newton · 3d</div>
                                    </div>
                                </Link>
                                <Link className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                            <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage"
                                href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"></Link>
                            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                                aria-labelledby="navbarDropdownUserImage">
                                <h6 className="dropdown-header d-flex align-items-center">
                                    <div className="dropdown-user-details">
                                        <div className="dropdown-user-details-name">Valerie Luna</div>
                                        <div className="dropdown-user-details-email"><Link href="/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="a4d2c8d1cac5e4c5cbc88ac7cbc9">[email&#160;protected]</Link></div>
                                    </div>
                                </h6>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#!">
                                    <div className="dropdown-item-icon"><i data-feather="settings"></i></div>
                                    Account
                                </Link>
                                <Link className="dropdown-item" href="#!">
                                    <div className="dropdown-item-icon"><i data-feather="log-out"></i></div>
                                    Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav" style={{ width: isOpen ? "240px" : "0px" }}>
                        <nav className="sidenav shadow-right sidenav-light">
                            <div className="sidenav-menu">
                                <div className="nav accordion" id="accordionSidenav">

                                    <div className="sidenav-menu-heading">Core</div>
                                    <Link className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#collapseDashboards" aria-expanded="false"
                                        aria-controls="collapseDashboards">
                                        <div className="nav-link-icon"><i data-feather="activity"></i></div>
                                        Dashboards
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="sidenav-menu-heading">Faculty</div>
                                    <Link className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                        <div className="nav-link-icon"><i data-feather="grid"></i></div>
                                        Pages
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>

                                </div>
                            </div>
                            <div className="sidenav-footer" style={{ visibility: isOpen ? "visible" : "hidden" }}>
                                <div className="sidenav-footer-content">
                                    <div className="sidenav-footer-subtitle">Logged in as:</div>
                                    <div className="sidenav-footer-title">Valerie Luna</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content" style={{ "marginLeft": isOpen ? "0rem" : "-15rem" }}>
                        <main>
                            <PageHeader
                                icon={null}
                                title="Dashboard"
                                subtitle="Subtitle"
                            />
                            <div className="container-xl px-4 mt-n10">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div id="navBordersComponent">
                                            <div className="card mb-4">
                                                <div className="card-header">Borders</div>
                                                <div className="card-body">
                                                    <h6 className="small text-muted fw-500" id="navBordersComponentHorizontal">
                                                        Horizontal:</h6>
                                                    <div className="sbp-preview mb-4">
                                                        <div className="sbp-preview-content">
                                                            <nav className="nav nav-borders">
                                                                <Link className="nav-link active" href="#!">Active</Link>
                                                                <Link className="nav-link" href="#!">Link</Link>
                                                                <Link className="nav-link" href="#!">Link</Link>
                                                                <Link className="nav-link disabled" href="#!" tabIndex="-1"
                                                                    aria-disabled="true">Disabled</Link>
                                                            </nav>
                                                        </div>
                                                        <div className="sbp-preview-code">
                                                            <ul className="nav nav-tabs" id="navBordersHorizontalTabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link active me-1" id="navBordersHorizontalHtmlTab"
                                                                        data-bs-toggle="tab" href="#navBordersHorizontalHtml"
                                                                        role="tab" aria-controls="navBordersHorizontalHtml"
                                                                        aria-selected="true">
                                                                        <i className="fab fa-html5 text-orange me-1"></i>
                                                                        HTML
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" id="navBordersHorizontalPugTab"
                                                                        data-bs-toggle="tab" href="#navBordersHorizontalPug"
                                                                        role="tab" aria-controls="navBordersHorizontalPug"
                                                                        aria-selected="false">

                                                                        PUG
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="navBordersHorizontalHtml"
                                                                    role="tabpanel" aria-labelledby="navBordersHorizontalHtmlTab">
                                                                    <pre className="language-markup"></pre>
                                                                </div>
                                                                <div className="tab-pane" id="navBordersHorizontalPug" role="tabpanel"
                                                                    aria-labelledby="navBordersHorizontalPugTab">
                                                                    <pre className="language-pug"></pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sbp-preview-text">
                                                            The

                                                            component is a custom variation of Bootstrap's nav component built for
                                                            SB Admin Pro. You can use any justify flex utilities to change the
                                                            horizontal alignment of the nav, and you can also use this nav component
                                                            in an unordered list format.
                                                        </div>
                                                    </div>
                                                    <h6 className="small text-muted fw-500" id="navBordersComponentVertical">Vertical:
                                                    </h6>
                                                    <div className="sbp-preview">
                                                        <div className="sbp-preview-content">
                                                            <div className="max-w-[10rem]">
                                                                <nav className="nav nav-borders flex-column">
                                                                    <Link className="nav-link active" href="#!">Active</Link>
                                                                    <Link className="nav-link" href="#!">Link</Link>
                                                                    <Link className="nav-link" href="#!">Link</Link>
                                                                    <Link className="nav-link disabled" href="#!" tabIndex="-1"
                                                                        aria-disabled="true">Disabled</Link>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                        <div className="sbp-preview-code">
                                                            <ul className="nav nav-tabs" id="navBordersVerticalTabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link active me-1" id="navBordersVerticalHtmlTab"
                                                                        data-bs-toggle="tab" href="#navBordersVerticalHtml"
                                                                        role="tab" aria-controls="navBordersVerticalHtml"
                                                                        aria-selected="true">
                                                                        <i className="fab fa-html5 text-orange me-1"></i>
                                                                        HTML
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" id="navBordersVerticalPugTab"
                                                                        data-bs-toggle="tab" href="#navBordersVerticalPug"
                                                                        role="tab" aria-controls="navBordersVerticalPug"
                                                                        aria-selected="false">
                                                                        PUG
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="navBordersVerticalHtml"
                                                                    role="tabpanel" aria-labelledby="navBordersVerticalHtmlTab">
                                                                    <pre className="language-markup"></pre>
                                                                </div>
                                                                <div className="tab-pane" id="navBordersVerticalPug" role="tabpanel"
                                                                    aria-labelledby="navBordersVerticalPugTab">
                                                                    <pre className="language-pug"></pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sbp-preview-text">
                                                            You can also use the nav borders variant when using the

                                                            utility to create a vertical nav. The borders will move from the bottom
                                                            of the nav links to the right hand side. In this example, we've set a
                                                            max width of 10rem to the container that this nav is being used within.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="sidenavComponent">
                                            <div className="card mb-4">
                                                <div className="card-header">Custom Side Navigation Component</div>
                                                <div className="card-body">
                                                    <div className="sbp-preview">
                                                        <div className="sbp-preview-content">
                                                            <nav className="sidenav sidenav-light">
                                                                <div className="sidenav-menu">
                                                                    <div className="nav">
                                                                        <div className="sidenav-menu-heading">Heading</div>
                                                                        <Link className="nav-link" href="#!">
                                                                            <div className="nav-link-icon"><i
                                                                                data-feather="feather"></i></div>
                                                                            Link
                                                                        </Link>
                                                                        <Link className="nav-link" href="#!">
                                                                            <div className="nav-link-icon"><i
                                                                                data-feather="feather"></i></div>
                                                                            Another Link
                                                                        </Link>
                                                                        <Link className="nav-link disabled" href="#!">
                                                                            <div className="nav-link-icon"><i
                                                                                data-feather="feather"></i></div>
                                                                            Another Link
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="sidenav-footer">SB Sidenav Footer</div>
                                                            </nav>
                                                        </div>
                                                        <div className="sbp-preview-code">
                                                            <ul className="nav nav-tabs" id="navSidenavTabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link active me-1" id="navSidenavHtmlTab"
                                                                        data-bs-toggle="tab" href="#navSidenavHtml" role="tab"
                                                                        aria-controls="navSidenavHtml" aria-selected="true">
                                                                        <i className="fab fa-html5 text-orange me-1"></i>
                                                                        HTML
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" id="navSidenavPugTab" data-bs-toggle="tab"
                                                                        href="#navSidenavPug" role="tab"
                                                                        aria-controls="navSidenavPug" aria-selected="false">
                                                                        PUG
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="navSidenavHtml" role="tabpanel"
                                                                    aria-labelledby="navSidenavHtmlTab">
                                                                    <pre className="language-markup"></pre>
                                                                </div>
                                                                <div className="tab-pane" id="navSidenavPug" role="tabpanel"
                                                                    aria-labelledby="navSidenavPugTab">
                                                                    <pre className="language-pug"></pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sbp-preview-text">
                                                            The

                                                            component extends the default Bootstrap nav component. A working example
                                                            of the custom sidenav can be seen on the dashboard layout of the SB
                                                            Admin Pro theme. The sidenav being used in the dashboard layout has a
                                                            container with certain responsive behaviors, but the component itself
                                                            can be used on a standalone basis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="stickNavComponent">
                                            <div className="card mb-4">
                                                <div className="card-header">Custom Sticky Nav Component</div>
                                                <div className="card-body">
                                                    <div className="sbp-preview">
                                                        <div className="sbp-preview-content">The sticky menu on the side of this page is
                                                            a demo of the custom sticky nav component.</div>
                                                        <div className="sbp-preview-code">
                                                            <ul className="nav nav-tabs" id="navigationStickyTabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link active me-1" id="navigationStickyHtmlTab"
                                                                        data-bs-toggle="tab" href="#navigationStickyHtml" role="tab"
                                                                        aria-controls="navigationStickyHtml" aria-selected="true">
                                                                        <i className="fab fa-html5 text-orange me-1"></i>
                                                                        HTML
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" id="navigationStickyPugTab"
                                                                        data-bs-toggle="tab" href="#navigationStickyPug" role="tab"
                                                                        aria-controls="navigationStickyPug" aria-selected="false">
                                                                        PUG
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="navigationStickyHtml"
                                                                    role="tabpanel" aria-labelledby="navigationStickyHtmlTab">
                                                                    <pre className="language-markup"></pre>
                                                                </div>
                                                                <div className="tab-pane" id="navigationStickyPug" role="tabpanel"
                                                                    aria-labelledby="navigationStickyPugTab">
                                                                    <pre className="language-pug"></pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sbp-preview-text">
                                                            <p>
                                                                The

                                                                component utilizes the Bootstrap scrollspy functionality along with
                                                                custom styling to create a sticky navigation component that you can
                                                                use on inner pages within your application. The right side menu of
                                                                the style reference pages are all examples of the sticky nav being
                                                                used. You can set the offset and the scroll behavior of this menu
                                                                within the

                                                                file.
                                                            </p>
                                                            <p className="mb-0">
                                                                The code example above requires the JS to be used, which is included
                                                                by default in the

                                                                file. The above example also uses a

                                                                which may not be necessary if your page layout already includes a
                                                                container.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-icon mb-4">
                                            <div className="row g-0">
                                                <div className="col-auto card-icon-aside bg-secondary"><i
                                                    className="me-1 text-white-50 fab fa-bootstrap"></i></div>
                                                <div className="col">
                                                    <div className="card-body py-5">
                                                        <h5 className="card-title">Bootstrap Documentation Available</h5>
                                                        <p className="card-text">Navs are a default component included with the
                                                            Bootstrap framework. For more information on implementing, modifying,
                                                            and extending the usage of Bootstrap nav components within your project,
                                                            visit the official Bootstrap navs documentation page.</p>
                                                        <Link className="btn btn-secondary btn-sm"
                                                            href="https://getbootstrap.com/docs/4.4/components/navs/"
                                                            target="_blank">
                                                            <i className="me-1" data-feather="external-link"></i>
                                                            Visit Bootstrap Navs Docs
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="nav-sticky">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="nav flex-column" id="stickyNavBody">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" href="#navBordersComponent">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    Nav Borders
                                                                    <span className="badge bg-primary-soft text-primary">New</span>
                                                                </div>
                                                            </Link>
                                                            <ul className="nav flex-column ms-3">
                                                                <li className="nav-item"><Link className="nav-link"
                                                                    href="#navBordersComponentHorizontal">Horizontal</Link></li>
                                                                <li className="nav-item"><Link className="nav-link"
                                                                    href="#navBordersComponentVertical">Vertical</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item"><Link className="nav-link" href="#sidenavComponent">Side
                                                            Navigation</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" href="#stickNavComponent">Sticky
                                                            Navigation</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="footer-admin mt-auto footer-light">
                            <div className="container-xl px-4">
                                <div className="row">
                                    <div className="col-md-6 small">Copyright © Your Website 2021</div>
                                    <div className="col-md-6 text-md-end small">
                                        <Link href="#!">Privacy Policy</Link>
                                        ·
                                        <Link href="#!">Terms &amp; Conditions</Link>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

