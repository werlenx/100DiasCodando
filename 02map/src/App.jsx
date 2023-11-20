import './App.css'

const users =[
  {
    id: 1,
    name: 'Carlos',
    address: 'Rua A',
    age: 28,
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Maria',
    address: 'Rua B',
    age: 25,
    isAdmin: true,
  },
  {
    id: 3,
    name: 'Carlos',
    address: 'Rua C',
    age: 28,
    isAdmin: false,
  },
]

function App() {


  return (
    <>
      <div>{users.map((user) =>  <div key={user.id}>{user.name}, {user.age}</div>)}</div>
      
    </>
  )
}

export default App
