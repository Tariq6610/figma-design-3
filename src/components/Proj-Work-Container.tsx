import React from 'react'
import Management from './Management'
import Work from './Work'

const Proj_Work_Container = () => {
  return (
    <section className=' flex flex-col gap-[100px] justify-center w-full 2xl:px-[220px] lg:px-[32px] md:px-[20px] px-[16px]  lg:py-[140px] py-[100px]'>
        <Management />
        <Work />
    </section>
  )
}

export default Proj_Work_Container