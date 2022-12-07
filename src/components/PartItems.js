import React from 'react'

function PartItems({type,count, handleSelect}) {
  let items = [];
  for (let index = 1; index <= count; index++) {
    items = [...items, {type: type, index: index, src: `/character/${type}/${index}.png`}]
  }
    return (
      <>
      <div className='partItems'>
        {items.map(item => 
            (<img className={`partItemsImage display-${item.type}`} onClick={()=> handleSelect(item.type,item.index)}
            src={item.src} key={`${item.type}${item.index}`} />)
        ) }
      </div>
      </>
    )

}

export default PartItems