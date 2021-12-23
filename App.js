import React, {useState, useRef} from "react";
import { SafeAreaView } from "react-native";
import CreateUser from "./components/CreateUser";
import InputSample from "./components/InputSample";
import InputSampleSecond from "./components/InputSampleSecond";
import UserList from "./components/UserList";

const App = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const initUsers = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  
  const [users, setUsers] = useState(initUsers);
  
  const {username, email} = inputs;

  const nextId = useRef(4);

  const onChange = (name, e) => {
    setInputs({
      ...inputs,
      [name]: e
    })
  }

  
  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user])

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  
  return (
    <SafeAreaView>
      <InputSampleSecond />
      <CreateUser
        username = {username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}
      />
    </SafeAreaView>
  );
};
export default App;


