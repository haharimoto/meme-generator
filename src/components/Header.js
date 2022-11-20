import React from 'react'
import trollFace from '../troll-face.png'

function Header() {
  return (
    <header className='header'>
      <img className='header--image' src={trollFace} alt='' />
      <h2 className='header--title'>Meme Generator</h2>
    </header>
  )
}

export default Header
