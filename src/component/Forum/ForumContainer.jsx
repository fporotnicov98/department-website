import React from 'react'
import { connect } from 'react-redux'
import Forum from './Forum'
import { toggleShowPostForm } from "../../redux/forumReducer";


class ForumContainer extends React.Component {
    render() {
        return <>
            <Forum {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.forumPage.posts,
        isToggleShowPostForm: state.forumPage.isToggleShowPostForm

    }
}

export default connect(mapStateToProps,{toggleShowPostForm})(ForumContainer)