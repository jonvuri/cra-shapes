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

  // Request data
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(false)

  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    setInput(event.currentTarget.value)
  }

  const handleSubmit = async () => {
    if (input) {
      // Take current 'input' and submit to API
      setError(false)
      
      setPending(true)
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      setPending(false)

      if (pokemonResponse.status === 404) {
        setError(true)
      } else {
        const pokemonJsObj = await pokemonResponse.json()
        
        setPokemon(pokemonJsObj)
      }
    }
  }

  // Form submit event handler:
  const handleFormSubmit: React.FormEventHandler = (event) => {
    event.preventDefault()

    handleSubmit()
  }

  // // Manual keyboard event handler:
  // const handleKeyPress: React.KeyboardEventHandler = (event) => {
  //   const { key } = event

  //   if (key === "Enter") {
  //     handleSubmit()
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App-controls" onSubmit={handleFormSubmit}>
          <input type="text" onChange={handleInput} value={input} />
          <button onClick={handleSubmit}>Who's that Pokemon?</button>
        </form>
        <div className="App-pokemon-display">
          {pending ? (
            <div className="spinner-box">
              <div className="circle-border">
                <div className="circle-core" />
              </div>  
            </div>
          ) : (
            error ? (
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
            )
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
