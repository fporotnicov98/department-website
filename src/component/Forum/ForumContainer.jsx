import React from 'react'
import { connect } from 'react-redux'
import Forum from './Forum'
import { addNewPostForum } from "../../redux/forumReducer";


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
    }
}

export default connect(mapStateToProps, { addNewPostForum })(ForumContainer)