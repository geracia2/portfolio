import React from 'react'
import { DarkLightToggle } from '../components/DarkLightToggle';
import { Hero } from './../components/Hero';
import { BannerImage } from '../components/BannerImage';
import { Box, Center } from '@mantine/core';



export default function Home() {
    return (
        <>
            <DarkLightToggle />
            <Hero />
            <BannerImage />

        </>
    )
}

