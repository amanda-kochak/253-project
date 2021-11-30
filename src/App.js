import React, { useState, useEffect } from 'react';
import CreatedQueue from './components/CreatedQueue'
import QueueUser from './components/QueueUser';

function App() {

  //States and Hooks - must be inside the App component

  const [quser, setQUser] = useState({}) //each queue user is an object with certain attributes

  const [queue, setQueue] = useState([]) //state here is a list of all users in the queue. Each user is an object


  return (
    <div className="Queue">
      <CreatedQueue
        queue={queue}
        setQueue={setQueue}
      />

      <QueueUser
        quser={quser} ////passing the input state as props to the component
        setQUser={setQUser}
        queue={queue}
        setQueue={setQueue}
      />

    </div>
  )

}

export default App;


  //comprising certain attributes

  // const [first_name, setFirstName] = useState("")
  // const [last_name, setLastName] = useState("")
  // const [phone_number, setPhoneNumber] = useState([])
  // const [completedTasks, setCompletedTasks] = useState([])

  //   useEffect(() => {
  //     console.log("I am calling this Hook to get data FROM the local storage")
  //     getLocalqueue()
  //   }, [])

  //   useEffect(() => {
  //     console.log("I am calling this Hook to SAVE data from TO local storage")
  //     saveLocalqueue()
  //   }, [queue])

  //   const saveLocalqueue = () => {
  //     console.log("Saving Stuff to Local Storage")
  //     //console.log(JSON.stringify(queue)) //Convert a JavaScript object into a string with JSON.stringify().
  //     localStorage.setItem("queue", JSON.stringify(queue))
  //   }
  //   //Get stuff from local storage
  //   const getLocalqueue = () => {
  //     if (localStorage.getItem("queue") === null) {
  //       localStorage.setItem("queue", JSON.stringify([]))
  //     }
  //     else {
  //       console.log("In the else condition to load data from local storage")
  //       console.log(localStorage.getItem("queue"))
  //       let local_task_list = JSON.parse(localStorage.getItem("queue"))
  //       console.log("After parsing local storage")
  //       console.log(local_task_list)
  //       setqueue(local_task_list)
  //     }

  //     return (
  //       <div className="Queue">
  //         <h1>Waiting in the queue</h1>
  //         <CreatedQueue
  //           queue={queue}
  //           setqueue={setqueue}
  //           completedTasks={completedTasks}
  //           setCompletedTasks={setCompletedTasks}
  //         />
  //       </div>
  //     )
  //   }


  // }