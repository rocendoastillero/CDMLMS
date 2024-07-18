import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children, footer }) {
    return (
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container-xl px-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">

                                    <div className="card shadow-lg border-0 rounded-lg mt-5">

                                        <div className="card-body">
                                            <div className='row justify-content-center '>
                                                <img className="img-fluid !max-w-[18rem]" src="https://pub-732c458bc77e4eef9ad283fd0dbb9edc.r2.dev/cdmbanner.png" />
                                            </div>
                                            {children}
                                        </div>
                                        {footer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer-admin mt-auto footer-dark">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright © CDM LMS 2024</div>
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
    );
}
