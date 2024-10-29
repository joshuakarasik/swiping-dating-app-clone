import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { collection, onSnapshot } from "firebase/firestore";
import database from "./firebase"; // Import the database from your firebase config

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Use onSnapshot to listen to real-time updates
    const unsubscribe = onSnapshot(collection(database, "people"), (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

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
