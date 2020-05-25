import React from 'react'
import { connect } from 'react-redux'
import Forum from './Forum'


class ForumContainer extends React.Component {
    render() {
        return <>
            <Forum {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        forumPage: state.forumPage
    }
}

export default connect(mapStateToProps)(ForumContainer)