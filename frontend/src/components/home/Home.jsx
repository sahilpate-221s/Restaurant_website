import React from 'react'
import HeroPage from '../pages/HeroPage'
import SpecialDish from '../pages/SpecialDish'
import ServiceType from '../pages/ServiceType'
import Menu from '../menu/Menu'
import BookTable from '../pages/BookTable'
import BookingForm from '../pages/BookingForm'
const Home = () => {
  return (
    <div>
      <HeroPage />
      <SpecialDish />
      <ServiceType />
      <Menu/>
      <BookTable/>
      {/* <BookingForm/> */}
    </div>
  )
}

export default Home
