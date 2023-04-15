import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({onSearch, setAccess}) {
    return(    
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to = './about'>ABOUT</Link>
            </button>

            <button>
                <Link to = '/' onClick={() => {
                        setAccess(false);
                    }} >Log out</Link>
            </button>

            <button>
                <Link to = './home'>HOME</Link>
            </button>

    
        </nav>)
}

export default Nav;