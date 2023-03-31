const Button = ({ setPeople, data, people }) => {
  return (
    <>
      {people?.length ? (
        <button className="btn" type="button" onClick={() => setPeople([])}>
          clear list
        </button>
      ) : (
        <button className="btn" type="button" onClick={() => setPeople(data)}>
          reset list
        </button>
      )}
    </>
  )
}
export default Button
