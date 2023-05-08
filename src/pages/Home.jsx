import React from 'react'
import ImagesList from '../components/ImagesList'
import CategoryList from '../components/CategoryList';
import './home.css';


const Home = () => {
  return (
    <>
    <div className='home_block'>    
      <ImagesList />
      <ImagesList />
      <ImagesList />
    </div>
    <div>
      <CategoryList />
    </div>
    </>

  )
}

export default Home;