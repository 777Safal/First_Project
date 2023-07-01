import React from 'react'

function Map() {
  const data=[
    {h1:'01'},
    {h1:'01'},
    {h1:'01'},
    {h1:'01'},
    {h1:'05'},
    {h1:'01'},
    {h1:'01'},
    {h1:'01'},
    {h1:'01'},
    {h1:'01'},
  ]
  return (
    <div className='w-full h-96 mb-10 drop-shadow-2xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14135.711824234968!2d83.4669675!3d27.6577006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858177b65ab5%3A0xf2d52a27c6fceaf6!2sMonalisa%20Futsal%20Arena!5e0!3m2!1sen!2snp!4v1688073562166!5m2!1sen!2snp" 
        className='w-full h-full'></iframe>
      
    </div>
  )
}

export default Map