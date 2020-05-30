// import React from 'react'
import News from './News'
import { connect } from 'react-redux'
import { addPost } from './../../redux/newsReducer'



let mapStateToProps = (state) => {
    return {
        posts: state.newsPage.posts
    }
}

export default connect(mapStateToProps, {addPost})(News)