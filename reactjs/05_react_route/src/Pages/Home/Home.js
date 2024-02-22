import Image from 'react-bootstrap/Image'
import HomeBanner from './HomeBanner';
import HomeContactUs from './HomeContactUs';




const Home = () => {

    const btnTitle = "Let's Talk";

    return (
        <>
            <HomeBanner />

            <HomeContactUs btnTitle={btnTitle} />
        </>
    )
}

export default Home;