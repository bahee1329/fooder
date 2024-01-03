import React from 'react'
import './Fooder.css'


function Fooder() {
  return (
    <div className='fooder-container'>
        <div className='fooder-uppercontent'>
          <div className='fooder-uppercontent-1'>
             <h2 className='h2'>at digital</h2>
             <p className='para'>Your goal is our target. Not anything in between. We use  online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>
          <div className='fooder-uppercontent-2'>
             <div className='fooder-uppercontent-2-left'>
                <h3 className='h3'>Our Technologies</h3>
                <h4 className='h4'>React JS</h4>
                <h4 className='h4'>Gatsby</h4>
                <h4 className='h4'>NextJS</h4>
                <h4 className='h4'>NodeJS</h4>
                <h4 className='h4'>GraphQL</h4>
                <h4 className='h4'>laravel</h4>
             </div>
             <div className='fooder-uppercontent-2-right'>
                <h3 className='h3'>Our Services</h3>
                <h4 className='h4'>Social Media Marketing</h4>
                <h4 className='h4'>Web & MobileApp Development</h4>
                <h4 className='h4'>Data & Analiytics</h4>
                <h4 className='h4'>Google Marketing Solutions</h4>
                <h4 className='h4'>Search Enginr Optimizal</h4>
                
             </div>
          </div>
        </div>
        <div className='fooder-downcontent'>
              <hr/>
             <div className='fooder-downcontent-text'>
                <h4 className='h4'>privacy policy</h4>
                <h4 className='h4'>|</h4>
                <h4 className='h4'>tearms and conditions</h4>
             </div>
             
        </div>
    </div>
  )
}

export default Fooder