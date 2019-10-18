import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

export default function CharacterList({ filteredCharacter, checked }) {
  return (
    <section className="character-list">
      {filteredCharacter.map(char => (
        <CharacterCard key={char.id} char={char} checked={checked} ></CharacterCard>
      ))}
    </section>
  );
}
