const WordDisplay = ({ word = '' }) => {
  return (
    <section id="word-display">
      {word.split('').map((s, i) => {
        // TODO if letter is in guessed letters
        return <span key={`${s}-${i}}`}>_</span>
      })}   
    </section>
  )
}

export default WordDisplay