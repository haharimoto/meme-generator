import React from 'react'
import { useState, useEffect } from 'react'


function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://static.clideo.com/files/content/506/twitter-meme-maker-1.png"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: url
      }
    })

  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className='form'>
        <input
          className='form--input'
          type='text'
          placeholder='top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form--input'
          type='text'
          placeholder='bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get new meme image
        </button>
      </div>

      <div className='meme'>
        <img className='meme--image' src={meme.randomImage} alt='' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme

// getMemeImage in {}, without ()
// otherwise it would run the function whenever page is loaded


// * flipping state back and forth
// const [goOut, setGoOut] = useState(true)

// function flipGoOut() {
//   setGoOut(prevGoOut => !prevGoOut)
// }

// <div>
//   <button onClick={flipGoOut}>
//     {goOut ? "Yes" : "No"}
//   </button>
// </div>
