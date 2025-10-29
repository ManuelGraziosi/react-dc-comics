function Card({ comic }) {
    const { thumb, series } = comic;
    return (
        <>
            <div className="col-2 p-2">
                <div className="comic-card">
                    <img src={thumb} className=" object-fit-cover" alt={series} />
                    <div className="card-body bg-dark text-light">
                        <p className="fs-6">{series}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;