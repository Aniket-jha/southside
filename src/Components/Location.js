import React from 'react'

const Location = () => {
  return (
    <div className='lg:mx-16 mx-4 lg:pt-12 pb-12  ' >
        <div>
      
        <div className='lg:grid grid-cols-2 gap-6 mt-4 grid-flow-col' >
        <div>
        <h4 className='font-[NeueBold] my-1 text-[2.5rem]'>Location</h4>
        <iframe className='w-[100%] my-3 lg:my-0 h-[250px]  lg:h-[300px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15091.720798709732!2d72.8258839!3d18.9786898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc462de8a1f%3A0x2a4ee6362fbea170!2sSouthside%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1714534828670!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div >
        <h4 className='font-[NeueBold] my-1 text-[2.5rem]'>Property Tour</h4>
        <iframe className='h-[250px] w-[100%]   lg:h-[300px]' src="https://www.youtube.com/embed/YukkDVVWgm0?si=sp-H2rNbxc_dZbA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Location