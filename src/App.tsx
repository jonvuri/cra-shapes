import React, { useState } from 'react';

import './App.css';

type Pokemon = {
  name: string
  id: number
  sprites: {
    front_default: string
    front_shiny: string
  }
}

function App() {
  const [input, setInput] = useState("")
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    setInput(event.currentTarget.value)
  }

  const handleSubmit = async () => {
    // Take current 'input' and submit to API
    
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    const pokemonJsObj = await pokemonResponse.json()
    
    setPokemon(pokemonJsObj)
    console.log("pokemon: ", pokemonJsObj)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          <input type="text" onChange={handleInput} value={input} />
          <button onClick={handleSubmit}>Who's that Pokemon?</button>
          {pokemon && (
            <>
              <div>
                Name:
                {pokemon.name}
              </div>
              <div>
                #{pokemon.id}
              </div>
              <img src={pokemon.sprites.front_default} />
              <img src={pokemon.sprites.front_shiny} />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
