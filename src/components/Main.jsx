import HeroBanner from "./HeroBanner";
import Grid from "./Grid";
import IconsList from "./IconsList";

function Main({ comicsList, iconsArray }) {
    const comics = comicsList;
    const shopLinks = iconsArray;
    return (
        <>
            <main className="">
                <HeroBanner />
                <Grid comicsArray={comics} />
                <IconsList iconsArray={shopLinks} />
            </main>
        </>
    )
}

export default Main;