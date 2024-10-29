import React from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
