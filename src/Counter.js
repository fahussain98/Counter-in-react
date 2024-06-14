function Counter (props){
    console.log(props);
    
    return(
        <div>
        <div>
          <button onClick={props.decrement}>Decrement</button>
          <h5>Count is {props.count}</h5>
          <button onClick={props.increment}>Increment</button>
        </div>
        <button onClick={() => props.setCount(0)}>Reset</button>
      </div>
    )

}
export default Counter