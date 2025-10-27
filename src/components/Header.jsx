function Header() {
    const navElemArray = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEW", "SHOP"];

    return (
        <>
            <header className="container d-flex justify-content-between align-items-center px-3">
                <img src="/dc-logo.png" alt="" />
                <nav className="">
                    <ul className="d-flex gap-3 list-unstyled">
                        {/* <li><a className="link-underline link-underline-opacity-0" href="/">CHARACTERS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">COMICS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">MOVIES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">TV</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">GAMES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">COLLECTIBLES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">VIDEOS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">FANS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">NEWS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">SHOP</a></li> */}
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