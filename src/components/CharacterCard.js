import React, { useState } from 'react'
import Zoom from '@material-ui/core/Zoom';
import AccordionCharacter from './AccordionCharacter';



export default function CharacterCard({ checked, char }) {


  return (
    <div className="Cards">
      <Zoom in={checked} style={{ transitionDelay: checked ? '200ms' : '0ms' }}>
        <img src={char.image} alt={`picture of ${char.name} from the popular tv show Rick and Morty`} />
      </Zoom>
      <AccordionCharacter char={char}></AccordionCharacter>

    </div>
  )
}