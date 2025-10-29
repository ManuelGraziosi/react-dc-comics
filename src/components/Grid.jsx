import Card from "./Card";

function Grid() {
    return (
        <>
            <div className="row">
                {comicsCardArrayJSX(comics)}
            </div>
        </>
    )

}

function comicsCardArrayJSX(comicsArray) {
    return comicsArray.map((curComic) => <Card key={curComic.id} comic={curComic}></Card>)
}
export default Grid;