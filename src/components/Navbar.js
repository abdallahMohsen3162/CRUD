import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
        <nav className=" p-3 navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active p-1" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link p-1" to="/products">products</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;