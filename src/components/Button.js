const Button = ({ filter }) => {
  return (
    <div>
      <button type="button" onClick={() => filter("Tips")}>
        Tips
      </button>
    </div>
  )
}

export default Button
