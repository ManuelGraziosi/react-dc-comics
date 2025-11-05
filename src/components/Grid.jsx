import Card from "./Card";

function Grid({ comicsArray }) {
    console.log(comicsArray);

    return (
        <>
            <div className="container">
                <h2>Current Series</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6">
                    {
                        comicsArray.map((curComic) => (
                            <div key={curComic.id} className="col">
                                <Card comic={curComic} />
                            </div>)
                        )
                    }
                </div>
            </div>
        </>
    )

}

export default Grid;