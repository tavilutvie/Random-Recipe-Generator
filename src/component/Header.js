import './Header.css'
const Header = () => {

    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        <nav>
            <button class="button-49" onClick={refreshPage}>Click to reload!</button>
        </nav>
    )
}

export default Header
