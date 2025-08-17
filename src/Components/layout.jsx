import React from 'react'
import Card from './card.jsx'

const RootLayout = () => {
  return (
    <div className="antialiased">
      <div className='bg-background text-foreground h-screen'>
        <Card/>
      </div>
    </div>
  )
}

export default RootLayout