import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container">

            <footer className="py-5">
                {/* <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/forms" className="nav-link p-0 text-body-secondary">Features</Link></li>
                            <li className="nav-item mb-2"><Link to="/mascotas" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <Link className="navbar-brand" to="http://mrwgifs.com/wp-content/uploads/2014/02/Ditto-Dance-Rave-All-Over-The-Place-In-Pokemon-Gif.gif" target="_blank">
                            <img src="logo.png" alt="" width="230" height="50" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                </div> */}

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2024 Gannis, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#twitter" /></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;