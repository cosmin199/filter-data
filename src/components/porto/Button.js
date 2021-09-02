const Button = ({ button, filter }) => {
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button className="btn" type="button" onClick={() => filter(cat)}>
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default Button
