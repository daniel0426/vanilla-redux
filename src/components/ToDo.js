import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'

const ToDo = ({text, delBtnClick, id}) => {
    return <li>
        <Link to={`/${id}`}>                                        
            {text}
            <button onClick={delBtnClick}>DEL</button>                                              
        </Link>                 
    </li>
                                                                                                       }                   

function mapDispatchToProps(dispatch, ownProps){
    return {
        delBtnClick : ()=> {dispatch(actionCreators.deleteTodo(ownProps.id))}
    }
}

export default connect(null, mapDispatchToProps)(ToDo)
                                    