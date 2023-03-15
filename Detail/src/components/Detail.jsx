import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Detail = () => {

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/4/`)
      const json = await response.json()

      if (response.ok) {
        console.log(json);
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div>
      <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg" alt='pokemon'></img>
    </div>
  )
}

export default Detail
