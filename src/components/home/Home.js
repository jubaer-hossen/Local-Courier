import Couriers from '../Couriers/Couriers';
import Outstanding from '../OUTSTANDING/Outstanding';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Couriers></Couriers>
            </div>
            <div>
                <Outstanding></Outstanding>
            </div>
        </div>
    );
};

export default Home;
