import React from 'react'
import { connect } from 'react-redux'
import Forum from './Forum'
import { getForum } from "../../redux/forumReducer";


class ForumContainer extends React.Component {
    componentDidMount(){
        this.props.getForum()
    }
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

export default connect(mapStateToProps, { getForum})(ForumContainer)