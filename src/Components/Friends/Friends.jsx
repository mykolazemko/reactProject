import React from 'react'

const Friend = (props) => {
    return(
        <div>{props.name}</div>
    )
}

const Friends = (props) => {
    debugger
let friends = props.state.friendsPage.friendsList.map(friend => <Friend id = {friend.id} name = {friend.name}/>)
    return(
        <div>
            {friends}
        </div>
    )
}

export default Friends