function Card({ series, thumb }) {
    return (
        <>
            <div className="col-2 p-2">
                <div class="card h-100">
                    {/* <img src={thumb} class="card-img-top" alt={series} /> */}
                    <div class="ratio ratio-1x1 ">
                        <img src={thumb} class="align-top object-fit-cover" alt={series} />
                    </div>
                    <div class="card-body bg-dark text-light">
                        <p class="fs-6">{series}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;