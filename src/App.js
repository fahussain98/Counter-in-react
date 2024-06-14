import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
function App(){

  let [count, setCount] =useState(0);

  const handleIncrement = ()=>{
    setCount(count+1);
  };
  const handleDecrement = ()=>{
    count<=0? setCount(0):
    setCount(count-1);
  };

  return (
   <Counter count={count} setCount= {setCount} increment ={handleIncrement} decrement = {handleDecrement} />
   
  );
}

export default App;


// function App() {
//   let [count, setCount] = useState(0);
//   const increment = () =>setCount(count+1);
//   const decrement = () => count <= 0 ? setCount(0) :setCount(count-1);
//   const reset = () => setCount(0)
//   return (
//     <>
//       <div className="container">
//         <h2 className="heading">Counter App</h2>
//         <p className="data">{count}</p>
//         <div className="buttons">
//           <div>
//             <button className="increment" onClick={increment}>Increment</button>
//           </div>
//           <div>
//             <button className="reset" onClick={reset}>Reset</button>
//           </div>
//           <div>
//             <button className="decrement" onClick={decrement}>Decrement</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;


 