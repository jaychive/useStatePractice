import React, {useState} from "react";

function App() {

  const [count, updateCount] = useState(1);
  
  const controlCount = (c) => {
    if(c === 'up'){
      updateCount(count+1);
    }else{
      updateCount(count-1);
    }
    document.querySelector('h1').innerHTML = count;
  }
  
  return (
    <>
      <button onClick={(e)=>{
        controlCount('up');
      }}>추가하기</button>
      <button onClick={(e)=>{
        controlCount('down');
      }}>제거하기</button>
      <h1>0</h1>
    </>
  );
}

export default App;
