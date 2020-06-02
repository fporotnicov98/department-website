import React from "react";
import Carousel from "./Carousel";
import { connect } from "react-redux";

const Slider = (props) => {
    return (
        <Carousel {...props} />
    );
};

let mapStateToProps = (state) => {
    return {
        posts: state.newsPage.posts,
    }
}
export default connect(mapStateToProps)(Slider);
