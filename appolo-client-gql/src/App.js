// import logo from './logo.svg';
import { createRef } from 'react';
import './App.css';
import {useMutation, useQuery} from "@apollo/client";
import {createMessageMutation, getAllMessages} from './gqlSchema'


function App() {

  let {data, err, loading} = useQuery(getAllMessages);
console.log("data", data, "Error: ", err, "Loading: ",loading);


  const messageValue = createRef()
  const [addMessage] = useMutation(createMessageMutation)

  const submit = () => {
    let message = messageValue.current.value;
    addMessage({variables : {data: {message}}})
    .then( data => {
      console.log('res', data);
    }).catch(err => {
      console.log("err", err);
    })
  }
  return (
    <div className="App">
      <input ref={messageValue} placeholder="message"/>
      <button onClick={submit}>add</button>
    </div>
  );
}

export default App;
