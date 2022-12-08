import React from 'react'
import PartItems from './PartItems'

function PartList({total, handleSelect}) {
  return (
    <div className= 'partListWrapper'> 
            <div className='partList' id="body"       ><h4 className='partListName'>body       </h4><PartItems handleSelect = {handleSelect} count={total.body} type= "body" /></div>
            <div className='partList' id="eyes"       ><h4 className='partListName'>eyes       </h4><PartItems handleSelect = {handleSelect} count={total.eyes} type= "eyes" /></div>
            <div className='partList' id="mouth"      ><h4 className='partListName'>mouth      </h4><PartItems handleSelect = {handleSelect} count={total.mouths} type= "mouths" /></div>
            <div className='partList' id="eyebrows"   ><h4 className='partListName'>eyebrows   </h4><PartItems handleSelect = {handleSelect} count={total.eyebrows} type= "eyebrows" /></div>
            <div className='partList' id="hair"       ><h4 className='partListName'>hair       </h4><PartItems handleSelect = {handleSelect} count={total.hair} type= "hair" /></div>
            <div className='partList' id="facial_hair"><h4 className='partListName'>facial hair</h4><PartItems handleSelect = {handleSelect} count={total.facial_hair} type= "facial_hair" /></div>
            <div className='partList' id="hat"        ><h4 className='partListName'>hat        </h4><PartItems handleSelect = {handleSelect} count={total["accessories/hats"]} type= "accessories/hats" /></div>
            <div className='partList' id="glasses"    ><h4 className='partListName'>glasses    </h4><PartItems handleSelect = {handleSelect} count={total["accessories/glasses"]} type= "accessories/glasses" /></div>
            <div className='partList' id="earrings"    ><h4 className='partListName'>earrings    </h4><PartItems handleSelect = {handleSelect} count={total["accessories/earrings"]} type= "accessories/earrings" /></div>
            <div className='partList' id="neckwear"    ><h4 className='partListName'>neckwear    </h4><PartItems handleSelect = {handleSelect} count={total["accessories/neckwear"]} type= "accessories/neckwear" /></div>
            <div className='partList' id="clothing1"  ><h4 className='partListName'>main clothing  </h4><PartItems handleSelect = {handleSelect} count={total["clothes/layer_1"]} type= "clothes/layer_1" /></div>
            <div className='partList' id="clothing2"  ><h4 className='partListName'>second layer clothing  </h4><PartItems handleSelect = {handleSelect} count={total["clothes/layer_2"]} type= "clothes/layer_2" /></div>
            <div className='partList' id="clothing3"  ><h4 className='partListName'>third layer clothing  </h4><PartItems handleSelect = {handleSelect} count={total["clothes/layer_3"]} type= "clothes/layer_3" /></div>
          </div>
  )
}

export default PartList