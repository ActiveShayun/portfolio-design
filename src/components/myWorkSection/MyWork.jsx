import Title from '../shared/subtitle/Title';
import Cards from './Cards';


const MyWork = () => {
    return (
        <div className='bg-[#141414] py-12 px-4 text-white lg:pt-[90] lg:pb-20  lg:px-10 rounded-lg mt-3'>
            <div className='lg:flex items-center gap-4 mb-18 '>'
                <div className='lg:relative right-4'>
                    <Title text={'Choose me'} />
                </div>
                <div>
                    <h2 className='text-6xl font-bold'>My Work Process</h2>
                </div>
            </div>
            {/* cards */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12'>
                    <Cards btnText={'Discovery'}
                        description="We start every new client interaction
                        with an in-depth discovery call where
                        we get to know each other, discuss
                        current and future objectives,
                        and recommend the best course of action."

                    />
                    <Cards colors={true} bg={true} btnText={'Strategy'}
                        description="Every end-to-end project of ours
                    begins with a tEspoke pre-build
                    strateu. From brand ID consultation
                    to in-depth ccxle reviews we're here
                    to set the stage for success."/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 mt-6'>
                    <Cards btnText={'Design'}
                        description="After we have a comprehensive
                    understanding of your brand, we'll be
                    ready to move onto design. Each page
                    or will be designed, reviewed,
                    and given your stamp of approval."
                    />
                    <Cards btnText={'Build'}
                        description="Whether we've just finished
                    designing your new site or you're
                    handing off finished designs for us to
                    develop in Webflow, we're here to
                    apply our trusted development
                    process to your project."/>
                </div>

            </div>
        </div>
    );
};

export default MyWork;