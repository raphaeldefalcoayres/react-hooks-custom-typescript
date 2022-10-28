import { useLocalStorage, useSessionStorage } from './useStorage'

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage({ key: 'name', defaultValue: 'Kyle' })
  const [age, setAge, removeAge] = useLocalStorage({ key: 'age', defaultValue: 26 })

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('John')}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
