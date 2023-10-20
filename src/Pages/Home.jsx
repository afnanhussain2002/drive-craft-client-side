
import BrandSection from '../components/BrandSection';
import Gallary from '../components/Gallary';
import HomeBanner from '../components/HomeBanner';
import ThiredSection from '../components/ThiredSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BrandSection></BrandSection>
            <ThiredSection></ThiredSection>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;