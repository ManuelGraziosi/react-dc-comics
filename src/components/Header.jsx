function Header() {
    return (
        <>
            <header className="container d-flex justify-content-between align-items-center px-3">
                <img src="/dc-logo.png" alt="" />
                <nav>
                    <lu className="d-flex gap-3 list-unstyled">
                        <li><a className="link-underline link-underline-opacity-0" href="/">CHARACTERS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">COMICS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">MOVIES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">TV</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">GAMES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">COLLECTIBLES</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">VIDEOS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">FANS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">NEWS</a></li>
                        <li><a className="link-underline link-underline-opacity-0" href="/">SHOP</a></li>
                    </lu>
                </nav>
            </header>
        </>
    )
}

export default Header;