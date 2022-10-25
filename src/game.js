import { useEffect, useState } from 'react'
import Header from './components/header'
import WordDisplay from './components/word-display'
import GuessedLetters from './components/guessed-letters'
import useKeyboard from './hooks/useKeyboard'
import { getRandomWord } from './utils/api'
import { checkWord } from './utils/helpers'

let timeoutId

function App() {
  const [loading, setLoading] = useState(true)
  const [word, setWord] = useState('')
  const [guesses, setGuesses] = useKeyboard()
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (!word) {
      getWord()
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const isMatch = checkWord(word, guesses)
        if (isMatch) {
          setScore(score + 1)
          setWord('')
          setGuesses([])
        }
      }, 1000)
    }
  }, [guesses])

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
      <Header 
        score={score}
      />
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
