import './NavBar.css'
import nittLogo from './assets/nitt-logo.png'

function NavBar() {
    return (
        <>
            <div className='nav-container'>
                <div className='nav-brand' href="/">
                    <div>
                        <img
                            alt="NITT Logo"
                            src={nittLogo}
                            className="d-inline-block align-top"
                        />
                    </div>
                    <div>
                        <p className='title'>
                            PLACEMENT PORTAL
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;