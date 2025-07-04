import React, { useState } from 'react'

const MultiCondition = () => {
    const grade = 70;

    const handleGrade = () => {
        if(grade > 90){
            return "A+"
        }else if(grade >80 ){
            return "A"
        }else if(grade > 70){
            return "B"
        }else if( grade > 60) {
            return "C"
        }else{
            return "fail"
        }
    }
  return (
    <div>
      <h1>Grade system</h1>
      <h1>{handleGrade(grade)}</h1>
    </div>
  )
}

export default MultiCondition
