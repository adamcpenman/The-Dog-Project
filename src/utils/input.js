import React, { useState, useEffect } from "react";


//custom hooks
export function useInput(initialValue){
    //intitalValue can be a primitive type or callback function
    //if a callback function, whatever gets returned is the initial value
  const [value, setValue] = useState(initialValue)

  const customSetter = (newValue) => {
    console.log("New Value", newValue)
    setValue(newValue)
  }

  return [value, customSetter]
}


export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useInput(() => {
        return window.localStorage.getItem(key) || initialValue;
    })
    const customSetter = (newValue) => {
        setValue(newValue)
        window.localStorage.setItem(key, newValue)
    }

    return [value, customSetter]
}
