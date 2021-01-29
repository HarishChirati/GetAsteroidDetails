import React from 'react'
import AstroidCard from '../components/AstroidCard'
import { Text, View } from 'react-native'
import styles from '../styles/global'
import { connect } from 'react-redux'
import {Astroid} from '../types/types'

type Props = {
  astroid: Astroid
}

const AstroidView = (props: Props) => {
  return (
    <View style={styles.layout}>
      <AstroidCard >
        <Text style={styles.text}>
          <Text style={styles.headings}>Name:</Text>
          <Text>{props.astroid.astroid.name}</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.headings}>Name Limited:</Text>
        <Text>{props.astroid.astroid.name_limited}</Text> 
        </Text>
        <Text style={styles.text}>
        <Text style={styles.headings}>ID:</Text>
        <Text>{props.astroid.astroid.id}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.headings}>NEO Reference Id: </Text>
          <Text> {props.astroid.astroid.neo_reference_id}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.headings}>Designation:</Text> 
          <Text>{props.astroid.astroid.designation}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.headings}>Nasa jpl url:</Text>
          <Text> {props.astroid.astroid.nasa_jpl_url}</Text>
      </Text>
        <Text style={styles.text}>
          <Text style={styles.headings}>Hazardous:</Text>
          <Text>{props.astroid.astroid.is_potentially_hazardous_asteroid? 'YES' : 'NO'}</Text>
      </Text>
      </AstroidCard>
    </View>
  )
}
const mapStateToProps = (state: {astroidState:Astroid}) => ({
  astroid: state.astroidState
})
export default connect(mapStateToProps)(AstroidView)