import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (

        <nav className="container">
            <ol className="breadcrumb">
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={path}>
                            <span className="separator">/</span>
                            <Link to={path}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;