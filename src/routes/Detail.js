import React from 'react'
import { connect } from 'react-redux';


const Detail = ({toDo}) => {
   
    return <>
        <h2>{toDo?.text}</h2>
        <h5>created at {toDo?.id}</h5>
    </>
}
function mapStateToProps(state, ownProps){
    const {match : {params : {id}}} = ownProps;
    return {toDo: state.find(item => item.id === parseInt(id))}
}

export default connect(mapStateToProps)(Detail)
