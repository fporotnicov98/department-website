// import React from 'react'
import News from './News'
import { connect } from 'react-redux'
import { toggleShowPostForm, setPostId, removePostId } from "../../redux/newsReducer";
import uniqBy from 'lodash/uniqBy'
import { getNews } from "../../redux/newsReducer";




let mapStateToProps = (state) => {
    return {
        posts: state.newsPage.posts,
        postId: uniqBy(state.newsPage.postId, o => o.id),
        isToggleShowPostForm: state.newsPage.isToggleShowPostForm,
    }
}

export default connect(mapStateToProps, { toggleShowPostForm, setPostId, removePostId,getNews })(News)