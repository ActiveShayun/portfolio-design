import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import SkillCard from '../shared/skillCard/SkillCard';
import Title from '../shared/subtitle/Title';



const SkillSection = () => {
    return (
        <div className='bg-black lg:px-12 px-4 py-10 rounded-lg text-white '>
            <div data-aos="fade-right">
                <Title text={'Why Choose me'} />
            </div>
            {/* title & description */}
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='lg:text-6xl text-5xl font-bold leading-20'>My Extensive
                        <span className='block'>List of Skills</span></h3>
                </div>
                <div>
                    <p className='text-right'>
                        <span className='block'>Building the worlds best marketing Your </span>
                        <span>trusted partner for strategy, design, and dev.</span>
                    </p>
                </div>
            </div>
            {/* skill card section */}
            <div>
                <div
                    className='flex items-center gap-3 justify-end my-6'>
                    <FaArrowLeftLong data-aos="fade-right"
                        className='w-[44px] h-[44px] rounded-full border-2 p-2' />
                    <FaArrowRightLong data-aos="fade-left"
                        className='w-[44px] h-[44px] rounded-full border-2 p-2' />
                </div>
                {/* cards */}
                <div className='lg:flex items-center justify-center  gap-4 lg:px-12'>
                    <div className='lg:w-[430px] lg:h-[300px]'>
                        <SkillCard cardTitle={'HTML & CSS'} /></div>
                    <div className='lg:rotate-4 lg:w-[430px] lg:h-[300px]'>
                        <SkillCard cardTitle={'Javascript'} />
                    </div>
                    <div className='lg:-rotate-4 lg:w-[430px] lg:h-[300px]'>
                        <SkillCard cardTitle={'Webflow'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;