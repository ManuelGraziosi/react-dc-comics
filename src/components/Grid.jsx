import comics from "../comics";
import Card from "./Card";

function Grid() {
    return (
        <>
            <div className="row">
                <div className="card-group">
                    {comicsCardArrayJSX(comics)}
                </div>
            </div>
        </>
    )

}

function comicsCardArrayJSX(comicsArray) {
    return comicsArray.map((curComic) => Card(curComic))
}
export default Grid;