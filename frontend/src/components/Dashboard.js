import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import {useSelector} from 'react-redux'

function Dashboard() {
  const navigate= useNavigate()

  // useEffect(() =>{}, [user,navigate])

  // const {user} =useSelector((state)=>state.auth)
  useEffect(() =>{
    // if(user){
    //   navigate('/login')
    // }
  })
  return (
    <>
    <section className='heading'></section>
    <h1>Wecome user</h1>
    <p>Goals Dashboard</p>
 
    </>
  )
}

export default Dashboard
