import React, {useState, useRef} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputSample() {
    const secondRef = useRef();
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
      });

    const { name, nickname } = inputs;
    
    const onChange = (keyValue, e) => {
        const {text} = e.nativeEvent
        setInputs({
          ...inputs, 
          [keyValue]: text 
        });
      };
    
      const onReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })
      };



    return (
        <View>
            <TextInput
                style={styles.input}
                onChange={(e) => onChange("name", e)}
                value={name}
                onSubmitEditing={() => secondRef.current.focus()}
            />
            <TextInput
                style={styles.input}
                onChange={(e) => onChange("nickname", e)}
                value={nickname}
                onSubmitEditing={onReset}
                ref={secondRef}
            />
            <Text>name: {name}, nickname: {nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  

