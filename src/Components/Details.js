import React,{useState} from 'react'
import AirConditioner from "../asset/air-conditioner.png"
import CctvCamera from "../asset/cctv-camera.png"
import Cleaning from "../asset/cleaning.png"
import DinningTable from "../asset/dining-table.png"
import Elevator from "../asset/elevator.png"
import Gym from "../asset/fitness.png"
import Food from "../asset/food.png"
import Kitchen from "../asset/kitchen.png"
import LivingRoom from "../asset/living-room.png"
import Parking from "../asset/parking.png"
import SecurityGuard from "../asset/security-guard.png"
import StudyTable from "../asset/study-table.png"
import VendingMachine from "../asset/vending-machine.png"
import WashingMachine from "../asset/washing-machine.png"
import Wifibg from "../asset/wifibg.png"
const Details = ({propertyDetail}) => {
 
  return (
   
    <div id="details" className='lg:mx-16 items-center mx-4 py-4 lg:pt-12 lg:pb-12 grid grid-cols-1 gap-x-6 lg:gap-12 lg:grid-cols-2 grid-flow-row  '>
      <div className='pb-6 lg:py-0' >
      <h3 className='font-[NeueMedium]  lg:text-[1.5rem]  text-[.8rem] ' >Mahalaxmi's Premier CoLiving Space</h3>
        
        <h1 className='font-[NeueBold]  text-[1.5rem] leading-[1.5rem] lg:leading-[3rem]  uppercase lg:text-[2rem]' >Discover a Lifestyle of Ease and Connection in Our Mahalaxmi CoLiving Space.</h1>
        <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1.1rem] ' > Welcome to our co-living space in Mahalaxmi, a sanctuary where contemporary comfort meets a thriving community atmosphere. Situated in one of Mumbai’s most dynamic neighborhoods, our space offers an unparalleled living experience designed for modern urbanites. Whether you're a young professional, a digital nomad, or simply looking for a place that feels like home, we provide everything you need to live, work, and connect.</p>
        <a target='_blank' rel='noreferrer' href="https://form.jotform.com/240951205334449"> <button className="uppercase flex  lg:mt-4 mt-2 items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300    hover:shadow-none hover:bg-[#272727] tracking-wider text-[10px] py-3 px-6 md:text-[16px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" > Book Now </button></a>
      </div>
      <div className='border-t-[2px] lg:border-t-[0px] lg:border-l-[2px] pl-0 py-6 lg:py-0 lg:pl-12 border-gray-400' >
      <h1 className='font-[NeueBold]  text-[1.5rem] leading-[1.5rem] lg:leading-[3.5rem]  uppercase lg:text-[2.5rem]' >Amenities</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 grid-flow-row items-center justify-start gap-y-3 lg:gap-y-6 gap-x-6 lg:gap-x-8 ' >
            <div className='flex   mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={AirConditioner} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Air Conditioner</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={CctvCamera} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >CCTV</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Cleaning} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Housekeeping</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={DinningTable} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Dinning Area</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Elevator} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Elevator</p>
            </div>
           
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Food} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Meals</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Kitchen} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Kitchen</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={LivingRoom} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Living Room</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Parking} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Parking</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={SecurityGuard} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Security Guard</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={StudyTable} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Study Table</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={VendingMachine} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Vending Machine</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={WashingMachine} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Washing Machine</p>
            </div>
            <div className='flex mt-6 items-center justify-start gap-4' >
                <img className='lg:w-[50px] w-[30px] mt-[-18px]' src={Wifibg} />
                <p className='font-[NeueRegular]  text-[0.8rem]  lg:text-[1rem]' >Wifi</p>
            </div>
      </div>
      </div>
    </div>
  
  )
}

export default Details