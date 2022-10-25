const Header = ({ score = 0 }) => (
  <header>
    <h1>Word Guess</h1>
    <div className="lives text-pink">
      ❤❤❤❤❤
    </div>
    <span><strong>Score:</strong> {score}</span>
    <span><strong>Time:</strong> 30</span>
  </header>
)

export default Header