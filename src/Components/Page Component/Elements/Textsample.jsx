import React from 'react'

function Textsample() {
    const data=[
        {h1:'Text sample ',
            p:(<span>
                Every avid independent filmmaker has <span style={{
                    fontWeight:'bold',
                    color:'orange'
                }}>Bold</span> about making that Italic interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” theSuperscript scene, or video renters with their big project. But once you have theSubscript “in the can” (no easy feat), how do you move from a Strike through of master DVDs with the “Underline” marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results
            </span>),
         
        }
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12 '>
            <div className='text-3xl text-maincolor font-poping mb-10'>{data[0].h1}</div>
            <div className='text-lg font-bbbb tracking-widest text-mcse'>{data[0].p}</div>
        </div>
    </div>
  )
}

export default Textsample