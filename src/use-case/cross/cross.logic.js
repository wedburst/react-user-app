const isPendingState=(action)=>{
    return action.type.endsWith('/pending')
}
const isFailState=(action)=>{
    return action.type.endsWith('/reject')
}
const isSuccessState=(action)=>{
    return action.type.endsWith('/success')
}

export {
    isFailState,
    isPendingState,
    isSuccessState
}