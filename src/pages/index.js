import React from 'react'
import HomeLayout from '@/layouts/HomeLayout'
import { Box } from '@chakra-ui/react'
import MainSlider from '@/Components/Home/Landing/MainSlider'
import ProductSlider from '@/Components/Home/Landing/ProductSlider'
import Qualities from '@/Components/Home/Landing/Qualities'
import WhyChoose from '@/Components/Home/Landing/WhyChoose'
import Benefits from '@/Components/Home/Landing/Benefits'
import Ominphobic from '@/Components/Home/Landing/Ominphobic'
import Testimonial from '@/Components/Home/Landing/Testimonial'
import Extend from '@/Components/Home/Landing/Extend'

export default function index() {
  return (

    <HomeLayout>
    
      {/* Main Slider */}
      <MainSlider />
      {/* End Main Slider */}
      {/* Product */}
      {/* <ProductSlider /> */}
      {/* End Product */}
      {/* QUALITIES */}
      <Qualities />
      {/* End QUALITIES */}
      {/* Why Choose Us */}
      <WhyChoose />
      {/* End Why Choose Us */}
      {/* BENEFITS */}
      <Benefits />
      {/* End OminphobicBENEFITS */}
      {/* Ominphobic */}
      <Ominphobic />
      {/* End Ominphobic */}
      {/* TESTIMONIAL */}
      <Testimonial />
      {/* End TESTIMONIAL */}
      {/* Extend */}
      <Extend />
      {/* End Extend */}

    </HomeLayout>
  )
}
