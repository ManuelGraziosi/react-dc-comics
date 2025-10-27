function Card({ series, thumb, id }) {
    return (
        <>
            <div key={id} className="col-2 p-2">
                <div className="card h-100">
                    {/* <img src={thumb} className="card-img-top" alt={series} /> */}
                    <div className="ratio ratio-1x1 ">
                        <img src={thumb} className="align-top object-fit-cover" alt={series} />
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