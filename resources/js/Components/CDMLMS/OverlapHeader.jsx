import React from 'react'

/**
 * @function Component Header for the page with a gradient of primary and secondary color
 * 
 * @param icon Page Header Icon
 * @param title Page Title 
 * @param subtitle Page SubTitle
 * @returns HTML
 */
function OverlapHeader({ icon, title, subtitle, children }) {
    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <div className="container-xl px-4">
                    <div className="page-header-content pt-4">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        {icon}
                                    </div>
                                    {title}
                                </h1>
                                <div className="page-header-subtitle">
                                    {subtitle}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container-xl px-4 mt-n10">
                {children}
            </div>
        </main>

    )
}

export default OverlapHeader