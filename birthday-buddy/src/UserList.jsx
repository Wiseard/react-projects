// import data from './data'
import Button from './Button'
import User from './User'

export const UserList = ({ people, setPeople, data, removeUser }) => {
  const birthday =
    people.length > 1
      ? `${people.length} Birthdays Today`
      : !people.length
      ? '0 Birthday Today'
      : `${people.length} Birthday Today`
  return (
    <section>
      <h1>{birthday}</h1>

      {people.map((person) => {
        return <User {...person} key={person.id} removeUser={removeUser} />
      })}
      <div className="btn-container">
        <Button setPeople={setPeople} data={data} people={people} />
      </div>
    </section>
  )
}
