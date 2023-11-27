'use client'
import Trips from '~/components/Trips';
import Articles from '~/components/Articles';
import Outstanding from '~/components/Outstanding';
import ChooseUS from '~/components/ChooseUS';
import Destination from '~/components/Destination';
import Banner from '~/components/Banner';
import Brand from '~/components/Brand';
const Home = () => {


  return (
    <>
      <Banner />
      <div className='container'>
        <Outstanding title="Popular Destinations" description="World&rsquo;s best tourist destinations">
          <Destination />
        </Outstanding>
        <Outstanding title="Best Value Trips" description="Best offers trips from us">
          <Trips />
        </Outstanding>
        <Outstanding title="Why Choose Us" description="Here are reasons you should plan trip with us">
          <ChooseUS />
        </Outstanding>
      </div>
      <Brand />
      <div className='container'>
        <Outstanding title="Best Value Trips" description="Best offers trips from us">
          <Articles />
        </Outstanding>
      </div>

    </ >
  );
}
export default Home;
