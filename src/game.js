import { useEffect, useState } from 'react'
import Header from './components/header'
import WordDisplay from './components/word-display'
import GuessedLetters from './components/guessed-letters'
import { getRandomWord } from './utils/api'
import useKeyboard from './hooks/useKeyboard'

function App() {
  const [loading, setLoading] = useState(true)
  const [word, setWord] = useState()
  const [guesses, setGuesses] = useKeyboard()
  console.log(guesses)

  useEffect(() => {
    getWord()
  }, [])

  const getWord = async () => {
    setLoading(true)
    try {
      const randWord = await getRandomWord()
      setWord(randWord[0])
      setGuesses([])
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <Header />
      <WordDisplay
        loading={loading} 
        word={word} 
        guesses={guesses} 
      />
      <GuessedLetters guesses={guesses} />
    </main>
  );
}

export default App;
