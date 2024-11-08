import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid bg-info">
                <a className="navbar-brand" href="#">Compushop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Monitores</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mundo Gaming
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Consolas</a></li>
                                <li><a className="dropdown-item" href="#">Juegos</a></li>
                                <li><a className="dropdown-item" href="#">Accesorios</a></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget amount={5} />
                </div>
            </div>
        </nav>


    )
}

/*
const NavBar = () =>{

    return (
        <nav>
            <ul>
                <li>Home</li>
            </ul>
        </nav>

    )
}
export default NavBar */