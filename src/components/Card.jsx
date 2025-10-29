function Card({ comic }) {
    const { thumb, series } = comic;
    return (
        <>
            <div className="col-6 col-md-4 col-lg-2 p-2">
                <div className="card custom-card d-flex flex-column h-100">
                    <div className="h-50 w-full">
                        <img src={thumb} className="object-fit-cover card-img-top" alt={series} />
                    </div>
                    <div className="card-body bg-dark text-light">
                        <p className="fs-6">{series}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;