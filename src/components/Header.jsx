function Header({ menuItems }) {
    const navElemArray = menuItems;
    return (
        <>
            <header>
                <div className="container d-flex justify-content-between align-items-center px-3">
                    <a href="/">
                        <img src="/dc-logo.png" alt="" />
                    </a>
                    <nav className="">
                        <ul className="d-flex gap-3 list-unstyled">
                            {navElemArrayJSX(navElemArray)}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

function navElemArrayJSX(array) {

    return array.map((curElem) => <li key={curElem.id}><a className="link-underline-opacity-0" href={`${curElem.src}`}>{curElem.title}</a></li>)

}
export default Header;