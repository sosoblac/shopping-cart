import React, { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const [value, setValue] = useState(()=>{
    const jsonValue = localStorage.getItem()
    if(jsonValue != null) return JSON.parse(jsonValue)
  })
  useEffect(()=>{
    localStorage.setItem(JSON.stringify(value))
  },[value])
  return [value, setValue]
}

export default useLocalStorage
