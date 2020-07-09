const users = []

const addUser = ({id, username, room}) => {
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    //check duplicate
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })
    if(existingUser){
        return {error: 'This username exists'}
    }

    //save data
    user = {id, username, room}
    users.push(user)
    return {user}
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter(user => user.room === room)
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    let user
    if (index !== -1){
        user = users[index]
        users.splice(index, 1)
    }
    return user
}

module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
}