import React from 'react'
import { Button } from "@mui/material";


//this is the component where we get input data from the user who wants to join a queue and create the user object
function QueueUser(props) {
    console.log("In the QueueUser component - we create the user who wants to enter queue here")

    const createUser1 = () => {
        props.setQUser({ id: 1, firstName: "Michael", lastName: "Scott", mobNumber: "+11234567999" })
        props.setQueue([...props.queue, props.quser])
        console.log("printing the queue at this time")
        console.log(props.queue)
    }

    const createUser2 = () => {
        props.setQUser({ id: 2, firstName: "Dwight", lastName: "Schrute", mobNumber: "+11234567888" })
        props.setQueue([...props.queue, props.quser])
        console.log("printing the queue at this time")
        console.log(props.queue)
    }

    const createUser3 = () => {
        props.setQUser({ id: 3, firstName: "Pam", lastName: "Beesly", mobNumber: "+11234567777" })
        props.setQueue([...props.queue, props.quser])
        console.log("printing the queue at this time")
        console.log(props.queue)
    }

    const emptyQueue = () => {
        props.setQueue([])

    }

    const putDummyData = () => {
        const user1 = { id: 1, firstName: "Michael", lastName: "Scott", mobNumber: "+11234567999" }
        const user2 = { id: 2, firstName: "Dwight", lastName: "Schrute", mobNumber: "+11234567888" }
        const user3 = { id: 3, firstName: "Pam", lastName: "Beesly", mobNumber: "+11234567777" }
        const user4 = { id: 4, firstName: "Jim", lastName: "Halpert", mobNumber: "+11234567766" }
        const user5 = { id: 5, firstName: "Andy", lastName: "Bernard", mobNumber: "+11234567755" }
        props.setQueue([user1, user2, user3, user4, user5])

    }


    return (
        <div>
            <Button onClick={createUser1}>
                Add User 1
            </Button>

            <Button onClick={createUser2}>
                Add User 2
            </Button>

            <Button onClick={createUser3}>
                Add User 3
            </Button>

            <Button onClick={emptyQueue}>
                Empty Queue
            </Button>

            <Button onClick={putDummyData}>
                Put Dummy Data
            </Button>

        </div>
    )
}

export default QueueUser
