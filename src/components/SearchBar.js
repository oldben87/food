import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30}  style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius:10,
        margin: 10,
        flexDirection: 'row'
        
       
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 8
    }

})

export default SearchBar