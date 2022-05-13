import{ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './style.css';


function Navbar(){

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>Status Movie</h1>
                <a href="https://github.com/rafaelsantos01" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link"> /rafaelsantos01 </p>
                    </div>
                </a>
            </div>
        </nav>
      </header>
    );

}

export default Navbar;