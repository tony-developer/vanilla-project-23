/*const callback = ():number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)*/
import {MouseEvent} from 'react'

export const User =()=> {
    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        // alert('user have been deleted')
        alert(event.currentTarget.name)
    }
    const onNameChanged = ()=> {
        console.log("name changed")
    }
    const focusLostHandler =()=> {
        console.log("focus lost")
    }
    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >Dimych</textarea>
            <button name="delete" onClick={deleteUser} >delete</button>
            <button name={"Save"} onClick={deleteUser}>save</button>
        </div>
    )
}