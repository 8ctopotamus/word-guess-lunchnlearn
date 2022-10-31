import { useEffect, useState } from 'react'
import Header from './components/header'
import WordDisplay from './components/word-display'
import GuessedLetters from './components/guessed-letters'
import GameOver from './components/game-over'

const maxLives = 10
const extraGuesses = 10
let timeoutId

function App() {
  return (
    <main className="container">
      <Header />
      <WordDisplay />
      <GuessedLetters />
    </main>
  );
}

export default App;
