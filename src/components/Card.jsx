function Card({ comic }) {
    const { thumb, title } = comic;
    return (
        <>
            <div className="card">
                <img src={thumb} className="object-fit-cover card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </>
    )
}

export default Card;