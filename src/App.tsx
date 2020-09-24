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
  const [error, setError] = useState(false)

  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    setInput(event.currentTarget.value)
  }

  const handleSubmit = async () => {
    // Take current 'input' and submit to API
    setError(false)
    
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

    if (pokemonResponse.status === 404) {
      setError(true)
    } else {
      const pokemonJsObj = await pokemonResponse.json()
      
      setPokemon(pokemonJsObj)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          <input type="text" onChange={handleInput} value={input} />
          <button onClick={handleSubmit}>Who's that Pokemon?</button>
        </div>
        <div className="App-pokemon-display">
          {error ? (
            <div style={{color:"red"}}>Could not find a Pokemon with that name</div>
          ) : pokemon && (
            <>
              <div>
                Name:
                {pokemon?.name}
              </div>
              <div>
                #{pokemon?.id}
              </div>
              <img src={pokemon?.sprites.front_default} />
              <img src={pokemon?.sprites.front_shiny} />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
