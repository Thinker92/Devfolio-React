import Navigation from './Navigation'

function Header(){
    return (
        <header>
            <div className='header-nav'>
                <Navigation />
            </div>
            <div className="header-name">
                <h2>Vilson Apostolovski II</h2>
            </div>
        </header>
    );
}

export default Header;