import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return (
        <nav>
            <h1 style={{ opacity: `${libraryStatus ? 0 : 1}` }}>Simple react player</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                My Music
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
}

export default Nav;