import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'
const Result = ({name,score}) => {
  const history=useNavigate()
  useEffect(() => {
    if(!name){
      history("/")
    }
  },[name,history])
  return (
    <div className='result'>
      <span className='title'> Final Score : {score}</span>
      <Button
        variant="contained" color='primary' size='large' style={{alignSelf:'center',marginTop:20}} href='/'>Go To Home Page</Button>
    </div>
  )
}

export default Result
