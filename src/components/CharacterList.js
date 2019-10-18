import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

export default function CharacterList({ filteredCharacter }) {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {filteredCharacter.map(char => {
        <CharacterCard key={char.id} char={char} checked={checked} ></CharacterCard>
      })}
    </section>
  );
}
