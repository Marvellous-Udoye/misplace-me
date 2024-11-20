import { useEffect, useState } from 'react';
import backgroundImage from '../assets/images/9886321 2.png';
import BLFStep3 from '../assets/images/man_10428848 1.svg';
import BLFStep2 from '../assets/images/report.svg';
import BLFStep1 from '../assets/images/scan_7026205 1.svg';
import ItemList from '../components/itemList';

const universities = [
  {
    uni: 'Bells University',
  },
  {
    uni: 'Babcock University',
  },
];

function Index() {
  const [currentUni, setCurrentUni] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userUniversity = 'Bells University'
      const university = universities.find((uni) => uni.uni === userUniversity);
      setCurrentUni(university?.uni || '');
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <section className='flex flex-col md:flex-row gap-4 md:justify-between max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-10 pt-5'>
        <header className='flex flex-col justify-center gap-5 md:max-w-[650px] w-full text-center md:text-left'>
          <p className='text-3xl sm:text-4xl md:text-5xl leading-10 md:leading-[50px] lg:leading-[60px] font-bold'>Welcome to {currentUni} Lost and Found</p>
          <p className='text-xl lg:text-2xl leading-20 font-normal'>At {currentUni} Lost and Found, we can help you find items lost on campus.</p>
          <div className='max-w-[500px] w-full mx-auto md:mx-0 mt-5 md:mt-10'>
            <h3 className=' bg-blue-400 text-white py-2 text-xl font-semibold text-center rounded-full'>Use BLF in 3 simple steps</h3>
            <div className='flex flex-col gap-3 text-xl font-semibold py-4'>
              <p className='flex gap-4 max-w-[250px] w-full mx-auto md:mx-0'>
                <img
                  src={BLFStep1}
                  className='w-[30px h-[30px]'
                />
                Find an item?
              </p>
              <p className='flex gap-4 max-w-[250px] w-full mx-auto md:mx-0'>
                <img
                  src={BLFStep2}
                  className='w-[30px h-[30px]'
                />
                Report on BLF
              </p>
              <p className='flex gap-4 max-w-[250px] w-full mx-auto md:mx-0'>
                <img
                  src={BLFStep3}
                  className='w-[30px h-[30px]'
                />
                Return to it's owner
              </p>
            </div>
          </div>
        </header>

        <div className='hidden md:block md:max-w-[500px] w-full'>
          <img
            src={backgroundImage}
            className='rounded-0 md:rounded-[20px] h-full'
          />
        </div>
      </section>

      <ItemList
        title='Check out the latest reports'
      />
    </div>
  );
}

export default Index;