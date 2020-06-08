import React from 'react';
import { connect } from 'react-redux';
import PersonalAccount from './PersonalAccount';

class PersonalAccountContainer extends React.Component {
    render() {
        return (
            <div>
                <PersonalAccount {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        roleUser: state.auth.roleUser,
    }
}

export default connect(mapStateToProps, {})(PersonalAccountContainer);