function Header({ menuItems }) {
    const navElemArray = menuItems;
    return (
        <>
            <header className="container d-flex justify-content-between align-items-center px-3">
                <img src="/dc-logo.png" alt="" />
                <nav className="">
                    <ul className="d-flex gap-3 list-unstyled">
                        {navElemArrayJSX(navElemArray)}
                    </ul>
                </nav>
            </header>
        </>
    )
}

function navElemArrayJSX(array) {

    return array.map((curElem, index) => <li key={index}><a className="link-underline link-underline-opacity-0" href={`/${curElem}`}>{curElem}</a></li>)

}
export default Header;