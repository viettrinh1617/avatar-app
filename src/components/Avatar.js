import React from 'react'

function Avatar({selectedItems, handleRandomize}) {

        return (
            <>
            <div className='avatarImage'>
                {  
                    selectedItems.map(item => {                      
                        return item.id > 0 ?
                        <img key={`${item.type}${item.id}`} className={`selected ${item.type}`} src={`/character/${item.type}/${item.id}.png`} />
                        : "" 
                    }
                    )
                }
                <button className='randomizeBtn' onClick={handleRandomize}>Randomize</button>
            </div>   
            </> 

          )
}

export default Avatar