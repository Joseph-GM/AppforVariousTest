import React, {useState, useRef} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputSampleSecond() {
    const secondRef = useRef();
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
      });

    const { name, nickname } = inputs;
    
    const onChange = (keyValue, e) => {
        setInputs({
          ...inputs, 
          [keyValue]: e 
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
                onChangeText={(e) => onChange("name", e)}
                value={name}
                onSubmitEditing={() => secondRef.current.focus()}
            />
            <TextInput
                style={styles.input}
                onChangeText={(e) => onChange("nickname", e)}
                value={nickname}
                onSubmitEditing={onReset}
                ref={secondRef}
            />
            <Text style={styles.text}>name: {name}, nickname: {nickname}</Text>
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f44336'
    }
  });