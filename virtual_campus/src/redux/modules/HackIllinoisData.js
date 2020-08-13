//Action Creators
const UPDATE_AVATAR_MOVEMENT_LEFT = "UPDATE_AVATAR_MOVEMENT_LEFT"
const UPDATE_AVATAR_MOVEMENT_RIGHT = "UPDATE_AVATAR_MOVEMENT_RIGHT"
const UPDATE_AVATAR_MOVEMENT_UP = "UPDATE_AVATAR_MOVEMENT_UP"
const UPDATE_AVATAR_MOVEMENT_DOWN = "UPDATE_AVATAR_MOVEMENT_DOWN"

//Action Creators
export function updateAvatarMovementLeft (left) {
    return { 
        type: UPDATE_AVATAR_MOVEMENT_LEFT,
        left: left
    }
}

export function updateAvatarMovementUp (up) {
    return { 
        type: UPDATE_AVATAR_MOVEMENT_UP,
        up: up
    }
}

export function updateAvatarMovementDown (down) {
    return { 
        type: UPDATE_AVATAR_MOVEMENT_DOWN,
        down: down
    }
}

export function updateAvatarMovementRight (right) {
    return { 
        type: UPDATE_AVATAR_MOVEMENT_RIGHT,
        right: right
    }
}

//Reducers 
initialState = {
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

function editData(state = initialState, action) {
    switch (action.type) {
      case UPDATE_AVATAR_MOVEMENT_LEFT:
        return Object.assign({}, state, {
          style: {
                left: action.left,
                right: state.style.right,
                up:  state.style.up,
                down: state.style.down,
                position: state.style.position
          }
        })
      
      default:
        return state
    }
  }
