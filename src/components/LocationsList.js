import React, { useEffect, useState } from "react";

import LocationCard from "./LocationCard";

export default function LocationsList({ filteredLocations, checked }) {
    return (
        <section className="character-list">
            {filteredLocations.map(place => (
                <LocationCard key={place.id} place={place} checked={checked} ></LocationCard>
            ))}
        </section>
    );
}
