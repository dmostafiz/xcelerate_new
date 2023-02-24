import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { Navigation, Pagination, Scrollbar } from 'swiper';
import { ProductCard } from './ProductCard';
import { Box, useBreakpointValue } from '@chakra-ui/react';

export default function MultiProductSlider({ products }) {
    return (
        <Box overflow={'hidden'}>

            <Swiper
                spaceBetween={10}
                slidesPerView={useBreakpointValue({
                    base: 3,
                    md: 3,
                    lg: 3
                })}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Scrollbar]}
            >
                {products?.map((product, i) => (
                    <SwiperSlide key={i}>
                        <ProductCard product={product} description={false} />
                    </SwiperSlide>
                ))}

                {/* <span slot="container-start">Container Start</span> */}
            </Swiper>
        </Box>
    )
}
