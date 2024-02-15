import React from 'react'

function Result({secretNum,term}) {
    
    let result;

 if(term){

    if(term>secretNum) {
        result ="Higher";
    }else if(term < secretNum){
        result ='Lower';
    }else if( term == secretNum){
        result ='Yippe! Correct';
    }    
    else{
        result="Please enter the Valid Input"
    }
 }


    
  return (
    <>
         <h2 className='head'>You Guessed:{result}</h2>
    </>
   

  )
}

export default Result