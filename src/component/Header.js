import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        <nav>
            <Link to="/"><button class="button-49">Home</button></Link>
            <button class="button-49" onClick={refreshPage}>Refresh</button>
        </nav>
    )
}

export default Header
