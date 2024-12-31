import { FaCheck } from "react-icons/fa6";
import { FaGlobe } from 'react-icons/fa'
import flag from "./Nigeria Flag.png"
const PricingCard = () => {
    const Features =[
        "Real-Time Tracking",
        "Global Earnings",
        "High Commission Rates",
        "Marketing Resourses",
        "Timely Payment",
        "Dedicated Support"
    ]


  return (
    <div className='md-min:pt-24 md-min:pb-40 pt-10 grid place-items-center justify-center w-full'>
        <div className="pricing_card flex flex-col  w-11/12 md-min:w-[550px] drop-shadow-[0_5px_rgba(51,255,168,1)]">

            {/*---------- PRICING HEADING ------------*/}
            <div className="price-heading md-min:p-6 p-3 md-min:px-14 rounded-t-[20px] px-7 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] flex justify-between items-center space-x-12  shadow-xl">
                <div className="flex space-x-3 items-center">
                    <FaGlobe size={28} />
                    <p className='font-bold md-min:text-xl text-sm'>Affiliate Platform</p>
                </div>
                <div className="flex p-1 bg-white space-x-2 items-center">
                    <div className="flag w-[25px] h-[25px] md-min:w-[50] md-min:h-[50]">
                        <img src={flag} alt="flag name" className='w-full h-full rounded-sm object-contain'/>
                    </div>
                    <select name="country" id="country" className='font-bold w-[4rem] border-l-2 border-gray-400 h-full'>
                        <option value="NGN" className="absolute flex p-1 bg-white space-x-2 items-center text-base md-min:text-sm" selected>
                           
                                <div className="flag w-[50px] h-[50px]">
                                    <img src={flag} alt="flag name" className='w-full h-full rounded-sm object-contain'/>
                                </div>
                                <p className='font-bold w-[4rem] border-l-2 border-gray-400 h-fit'>NGN</p>
                      
                        </option>
                        
                    </select>
                </div>
            </div>

            {/* ---------------- PRICING BODY -------------*/}
            <div className="bg-white md-min:px-14 px-7 py-10 flex flex-col space-y-6 rounded-b-2xl">
            <p className='font-semibold text-lg'>Make a one-time payment to create your<br/> ExpertSkillz affiliate account.</p>
            <div className="flex md-min:justify-start md-min:space-x-3  items-baseline justify-between">
            <p className='font-bold md-min:text-5xl  text-3xl'>NGN 2000</p>
            <p className='text-gray-400 text-base font-bold'>/ one-time</p>
            </div>
            <p className='text-[#33FFA8] font-bold md-min:text-3xl text-xl '>Features</p>

            <div className="space-y-6 pb-5">
                {Features.map(item=>(
                        <div className="flex space-x-4">
                          
                            <FaCheck fill="" size={23} className="p-2 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-full text-white"/>
                            <p>{item}</p>
                        </div>
                    )
                )}
            </div>

            <button
                  onClick={() => window.location.href = "/pricing"}
                  className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-black border-[1px] hover:background3 text-black md-min:text-lg text-sm font-bold md-min:py-3 py-1 mx-12 rounded-[10px]"
                >
                  Get Started
            </button>
            </div>
        </div>
    </div> 
  )
}

export default PricingCard
