'use client'

import { useEffect, useState } from "react"

export default function StarWars () {
  const [isLoading, setIsLoading] = useState(false)
  const [ships, setShips] = useState([])

  const loadStarWarsData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/things');
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const { data } = await response.json();
      const ships = data?.results
      console.log('Ships', ships)
      setShips(ships ?? [])
      setIsLoading(false)
    } catch (err: any) {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    loadStarWarsData()
  }, [])
  return (
    <div>
      <h3>Star Wars</h3>
      <div className="star-wars"></div>
      {ships.map((ship: any) => {
          return (
            <p key={ship.name}>{ship.name}</p>
          )
      })}
    </div>
  )
}