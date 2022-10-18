import './Header.css'
const Header = () => {

    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        <nav>
            <button class="button-49" role="button" onClick={refreshPage}>Click to reload!</button>
        </nav>
    )
}

export default Header
