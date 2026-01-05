import React from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import HeroSection from './components/Herosection'
import CategorySection from './components/CategoryScroll'
import NewlyArrivedSection from './components/NewArrivalsSection'
import TrendingProducts from './components/TrendingProduct'
import PromoBannerSection from './components/PromoBannerSection'
import CategoryIconsSection from './components/CategoryIconsSection'
import BestSellingProducts from './components/BestSellingProducts'
import DiscountSignupSection from './components/DiscountSignupSection'
import RecentBlogSection from './components/RecentBlogSection'
import AppDownloadSection from './components/AppDownloadSection'
import PeopleAlsoLookingFor from './components/PeopleAlsoLookingFor'
import MostPopularProducts from './components/MostPopularProducts'
import Footer from './components/Footer'

const App = () => {
  React.useEffect(() => {
    // Ensure we start at the top when the app mounts (covers refresh/load)
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      <Header />
      <CategorySection />
      <HeroSection />
      <CategoryIconsSection />
      <NewlyArrivedSection /> 
      <TrendingProducts />
      <PromoBannerSection />
      <BestSellingProducts />
      <DiscountSignupSection />
       <MostPopularProducts />
      <RecentBlogSection />
      <AppDownloadSection />
      <PeopleAlsoLookingFor />
      <Footer />
    </CartProvider>
  )
}

export default App
