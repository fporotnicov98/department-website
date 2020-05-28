// import React from 'react'
import News from './News'
import { connect } from 'react-redux'
import { showComment, onSendPost } from './../../redux/newsReducer'


// class NewsContainer extends React.Component {
//     render() {
//         return <>
//             <News {...this.props} />
//         </>
//     }
// }

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

export default connect(mapStateToProps, {showComment, onSendPost})(News)