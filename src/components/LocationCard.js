import React, { useState } from 'react'
import Zoom from '@material-ui/core/Zoom';
import AccordionLocations from './AccordionLocations';

export default function LocationCard({ checked, place }) {
  return (
    <div className="Cards">
      <Zoom in={checked} style={{ transitionDelay: checked ? '200ms' : '0ms' }}>
        <h3>{place.name}</h3>
      </Zoom>
      <AccordionLocations place={place}></AccordionLocations>

    </div>
  )
}
