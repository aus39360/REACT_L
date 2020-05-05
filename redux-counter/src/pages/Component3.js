import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inc, dec} from '../actions/actionsCount'




const Component3 = ({count, inc, dec}) => (
    <div>
        <h1>Component3</h1>
        <button onClick={inc}>+</button>
        <h1>{count}</h1>
        <button onClick={dec}>-</button>
    </div>
)

const mapStateToProps = (state)=>{
    console.log(state)
    return  ({ count: state.reducer.count})
}

const mapDispatchtopProps = (dispatch)=> bindActionCreators({inc,dec}, dispatch)

export default connect(mapStateToProps, mapDispatchtopProps)(Component3)