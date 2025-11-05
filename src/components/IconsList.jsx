function IconsList({ iconsArray }) {
    console.log(iconsArray);
    return (
        <section className="bg-primary">
            <div className="container">
                <div className="row row-cols-2 row-cols-md-5">
                    {
                        iconsArray.map((icon) => (
                            <div key={icon.id} className="col">
                                <img src={icon.img} alt={icon.alt} />
                                <h4>{icon.title}</h4>
                                {/* <p>{icon}</p> */}
                            </div>)
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default IconsList;