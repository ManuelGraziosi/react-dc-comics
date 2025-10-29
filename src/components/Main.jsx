import Grid from "./Grid";

function Main({ comicsList }) {
    const comics = comicsList;
    return (
        <>
            <main className="bg-dark text-light py-5">
                <div className="container">
                    {/* <h1>----Content goes here----</h1> */}
                    <Grid comicsList={comics} />
                </div>
            </main>
        </>
    )
}

export default Main;