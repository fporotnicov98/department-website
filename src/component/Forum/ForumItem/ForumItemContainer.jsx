import React from 'react';
import ForumItem from './ForumItem';
import { connect } from 'react-redux';
import { getForumItem } from './../../../redux/forumReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ForumItemContainer extends React.Component {
    componentDidMount() {
        let forumId = this.props.match.params.forumId
        if (!forumId) {
            alert('404')
        }
        this.props.getForumItem(forumId)
    }
    render() {
        return (
            <div>
                <ForumItem  {...this.props} />
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        posts: state.forumPage.posts,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getForumItem })
)(ForumItemContainer);