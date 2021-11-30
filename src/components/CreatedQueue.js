import React from 'react'
import { TextField } from '@material-ui/core';
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { ListItemSecondaryAction } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

//importing icons from the material library
import StartIcon from '@mui/icons-material/Start';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
//import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));


const CreatedQueue = (props) => {
    console.log("in the Queue Component")

    //HANDLERS

    //below handle is called when processing starts for a user. This handle removes user from queue once processing is 
    //done after specific time interval

    const classes = useStyles();

    let handleStart = (user_id) => {
        setTimeout(() => { console.log("Processing Done"); }, process_time) //introduces a delay for process_time. Read more at https://www.sitepoint.com/delay-sleep-pause-wait/
        //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        alert("Processing Done. Removing you from the Queue")

        let filter_queue = props.queue.filter((user) => {
            console.log("in the filter method")
            return user.id !== user_id
        })

        console.log("After filtering data we have")
        console.log(filter_queue)

        //need to reset ID's as well
        console.log("Resetting ID's")
        let reset_id = 1
        for (let each_user of filter_queue) {
            each_user.id = reset_id
            reset_id = reset_id + 1
        }
        console.log("After reset lets print")
        console.log(filter_queue)

        props.setQueue(filter_queue)

    }


    //users who are waiting in the line can remove themselves from the line. This handler handles removal of a user from 
    //queue
    const handleUserRemoval = (removal_id) => {

        for (let each_user of props.queue) {
            if (each_user.id === removal_id) {
                //check if the phone number that user entered is the same as the phone number on file
                const enteredPhoneNumber = prompt('Please enter your phone number')
                if (each_user.mobNumber === enteredPhoneNumber) {
                    //remove this user from the queue using filter option
                    //Telling filter to set the state with all users except the one that we want to remove
                    props.setQueue(
                        props.queue.filter((user) => {
                            console.log("in the filter method")
                            return user.id !== removal_id
                        })
                    )

                    //need to reset ID's as well
                    console.log("Resetting ID's")
                    let reset_id = 1
                    for (let each_user of props.queue) {
                        each_user.id = reset_id
                        reset_id = reset_id + 1
                    }


                    //TO-DO: message user that he is removed from the queue
                }
                else {
                    alert("Sorry! Authentication Failed. Please enter correct Mobile Number")
                }

            }
        }
    }



    let process_time = 3 //time in seconds it takes for each user in the queue to be processed
    process_time = process_time * 1000 //convert in milliseconds
    let queue_place = "Chipotle"
    return (
        <div>
            <h2>Virtual Queue for {queue_place}</h2>
            <List>
                {
                    props.queue.map((each_user) => {
                        console.log("print users in the queue")
                        console.log(each_user)

                        if (each_user.id === 1) {
                            let initials = [].concat(each_user.firstName[0], each_user.lastName[0]) //getting initials to put in the avatar
                            console.log("First User Consitions")
                            return (
                                <ListItem key={each_user.id}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.orange}>
                                            {initials}
                                        </Avatar>
                                    </ListItemAvatar>


                                    <ListItemSecondaryAction>
                                        <ListItemIcon>
                                            <StartIcon onClick={
                                                () => {
                                                    // <ListItemSecondaryAction>
                                                    //     <CircularProgress color="success" />
                                                    // </ListItemSecondaryAction>
                                                    setTimeout(handleStart, process_time, each_user.id)
                                                }
                                            } />
                                        </ListItemIcon>
                                    </ListItemSecondaryAction>

                                    <ListItemText
                                        primary={[].concat(each_user.firstName, " ", each_user.lastName)} //JS string concatenation: read more at: https://dmitripavlutin.com/javascript-merge-arrays/
                                        style={{ color: "#5C4033" }}
                                        secondary={each_user.mobNumber}
                                    />
                                </ListItem>
                            )

                        }
                        else {
                            let initials = [].concat(each_user.firstName[0], each_user.lastName[0]) //getting initials to put in the avatar
                            return (
                                <ListItem key={each_user.id}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.orange}>
                                            {initials}
                                        </Avatar>
                                    </ListItemAvatar>
                                    {/* add a delete button after each user */}
                                    <ListItemSecondaryAction>
                                        <ListItemIcon>
                                            <RemoveCircleIcon onClick={
                                                () => { handleUserRemoval(each_user.id, false) }
                                            } />
                                        </ListItemIcon>

                                    </ListItemSecondaryAction>
                                    <ListItemText
                                        primary={[].concat(each_user.firstName, " ", each_user.lastName)} //JS string concatenation: read more at: https://dmitripavlutin.com/javascript-merge-arrays/
                                        style={{ color: "#5C4033" }}
                                        secondary={each_user.mobNumber}
                                    />
                                </ListItem>
                            )
                        }
                    }
                    )

                }
            </List>
        </div>
    )
}


export default CreatedQueue