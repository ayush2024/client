import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Box, styled } from '@mui/material'
import Banner from './Banner'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`

const Home = () => {

    const {products} = useSelector(state => state.getProducts);
    // console.log(products);

    // console.log(Array.isArray(products));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection />
                <Slide products={products} title="Discountes for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top selection" timer={false}/>
                <Slide products={products} title="Recomended Items" timer={false}/>
                <Slide products={products} title="Trending offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
        
            </Component>
        </>
    )
}

export default Home