import React from 'react'

function SampleButtons() {
    const dat=[
        [
        {h1:'Default',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        [
        {h1:'Default',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        [
        {h1:'Default',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        
    ]
    const data=[
        [
        {h1:'Susmit',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        [
        {h1:'Default',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        [
        {h1:'Default',color:'bg-gray-500'},
        {h1:'Primary',color:'bg-primary'},
        {h1:'Success',color:'bg-success'},
        {h1:'info',color:'bg-info'},
        ],
        
    ]

  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12 flex justify-center flex-col'>
        
        <div>
      {dat.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((button, buttonIndex) => {
            const correspondingButton = data[rowIndex][buttonIndex];
            return (
              <div key={buttonIndex} className="button-container">
                <button className={`button ${button.color}`}>
                  {button.h1}
                </button>
                <button className={`button ${correspondingButton.color}`}>
                  {correspondingButton.h1}
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </div>      


        {/* <div>
      <h2>Sample Buttons 1:</h2>
      {dat.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((button, buttonIndex) => (
            <button key={buttonIndex} className={`button ${button.color}`}>
              {button.h1}
            </button>
          ))}
        </div>
      ))}

<h2>Sample Buttons 2:</h2>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((button, buttonIndex) => (
            <button key={buttonIndex} className={`button ${button.color}`}>
              {button.h1}
            </button>
          ))}
        </div>
      ))}
    </div>
         */}
        
        
        
        
        
        {/* <div> */}

      {/* {dat.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((button, buttonIndex) => (
            <button key={buttonIndex} className={`button ${button.color}`}>
              {button.h1}
            </button>
          ))}
        </div>
      ))}
    </div> */}


        {/* {dat.map((val,i)=>{
            return <div key={i} className='flex mb-5'>
                <div><button className={`${val.color} px-8 py-3`}>{val.h1}</button></div>
            </div>
        })} */}
        </div>
    </div>
  )
}

export default SampleButtons