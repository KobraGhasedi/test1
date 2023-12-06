import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import '../src/assets/fonts/font-awesome.css'

function App() {
  const [count, setCount] = useState(0)
  const products=[
    {name:"چیپس ساده نمکی چی توز مقدار 60 گرم", price:20000,imageUrl:"src/assets/Images/chips.jpg",takhfif:"30%"},
    {name:"همبرگر ممتاز منجمد پمینا کاله مقدار 500 گرم", price:36380,imageUrl:"src/assets/Images/hamberger.jpg",takhfif:"25%"},
    {name:"رب گوجه فرنگی چین چین - 800 گرم", price:30000,imageUrl:"src/assets/Images/rob.jpg",takhfif:"40%"},
    {name:"شامپو صحت مدل رزماری حجم 450 میلی لیترپو", price:2000,imageUrl:"src/assets/Images/shampoosehat.jpg",takhfif:"20%"},
  ];
  return (
  <div className='items'>
    {
    products.map((item)=>{
         return  <ProductCard  product={item}/>
      
    })
    }
  </div>
  );
};

export default App
