import React from 'react'

function Avatar({selectedItems, handleRandomize}) {

        return (
            <>
            <div className='avatarImage'>
                <button className='randomizeBtn' onClick={handleRandomize}>Randomize</button>
                {  
                    selectedItems.map(item => {                      
                        return item.id > 0 ?
                        <img key={`${item.type}${item.id}`} className={`selected ${item.type}`} src={`/character/${item.type}/${item.id}.png`} />
                        : "" 
                    }
                    )
                }
                            </div>   
            </> 

          )
}

export default Avatar