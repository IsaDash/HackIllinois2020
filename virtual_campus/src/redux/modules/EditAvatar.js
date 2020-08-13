import update from 'immutability-helper'

//Actions
const UPDATE_AVATAR_MOVEMENT_LEFT = "UPDATE_AVATAR_MOVEMENT_LEFT"
const UPDATE_AVATAR_MOVEMENT_RIGHT = "UPDATE_AVATAR_MOVEMENT_RIGHT"
const UPDATE_AVATAR_MOVEMENT_UP = "UPDATE_AVATAR_MOVEMENT_UP"
const UPDATE_AVATAR_MOVEMENT_DOWN = "UPDATE_AVATAR_MOVEMENT_DOWN"

//Creating Actions
export const updateAvatarMovementLeft = (left) => ({
        type: UPDATE_AVATAR_MOVEMENT_LEFT,
        left: left
})

export const updateAvatarMovementUp = (up) => ({
        type: UPDATE_AVATAR_MOVEMENT_UP,
        up: up
})


export const updateAvatarMovementDown = (down) => ({
        type: UPDATE_AVATAR_MOVEMENT_DOWN,
        down: down
})

export const updateAvatarMovementRight = (right) => ({
        type: UPDATE_AVATAR_MOVEMENT_RIGHT,
        right: right
})

//Initial States
const initialState = {
    left: "0px",
    avatar: {
        style: {
            left: '0px',
            right: '0px',
            up: '0px',
            down: '0px',
            position: 'relative'
        }
    }
}

//Reducers 
export default function reducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
      case UPDATE_AVATAR_MOVEMENT_LEFT:
          newState = update(state, {
            left: {$set: action.left}
          })
          break;
    }
    return newState;
  }
