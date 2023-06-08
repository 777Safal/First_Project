import React from 'react'

function Block() {
    const data=[
        {   h1:'Block quites',
            p:'“Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking” '}
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12'>
            <div>{data[0].h1}</div>
            <div>
                <div>{data[0].p}</div>
            </div>
        </div>
    </div>
  )
}

export default Block