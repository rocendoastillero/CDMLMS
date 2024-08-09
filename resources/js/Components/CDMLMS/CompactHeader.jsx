export default function CompactHeader({ title, icon, buttons, children }) {
    return (
        <main>
            <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                <div className="container-xl px-4">
                    <div className="page-header-content">
                        <div className="row align-items-center justify-content-between pt-3">
                            <div className="col-auto mb-3">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        {icon}
                                    </div>
                                    {title}
                                </h1>
                            </div>
                            <div className="col-12 col-xl-auto mb-3 flex flex-row gap-3">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-xl px-4 ">
                {children}
            </div>
        </main>
    );
}