import { useState } from 'react'
import data from './data'
import { UserList } from './UserList'

const App = () => {
  const [people, setPeople] = useState(data)
  const removeUser = (id) => {
    const newList = people.filter((person) => person.id !== id)
    setPeople(newList)
  }
  return (
    <main>
      <UserList
        people={people}
        setPeople={setPeople}
        data={data}
        removeUser={removeUser}
      />
    </main>
  )
}

export default App
