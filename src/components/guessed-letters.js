const GuessedLetters = ({ guesses = [] }) => (
  <section id="guessed-letters">
    <h3>Guesses</h3>
    [{guesses.map(s => <span key={s}>{' '}{s}{' '}</span>)}]
  </section>
)

export default GuessedLetters