import React from "react";
// import MyPostsContainer from "../MyPosts/MyPostsContainer";
import VisitProfile from './VisitProfile'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";
import { loadUserData } from "../../../redux/actions/userVisited";

function VisitProfileContainer({ loadUsers, ...props }) {

    const setdata = useCallback(
        (params) => {
            return props.setData(params)
            // eslint-disable-next-line
        }, []
    )
    
    const { id } = useParams()
    
    useEffect(() => {
        if (Number(id) !== Number(props.userId)) {
            loadUsers(id)
        }
        //eslint-disable-next-line
    }, [id, setdata, props.userId])
    
    return (
        <div>
            VISIT PROFILE COMPONENT
            <VisitProfile
                status={props.status}
                name={props.name}
                avatar={props.avatar}
                jobSeek={props.jobSeek}
                jobSeekDescr={props.jobSeekDescr}
            />
            {/* <MyPostsContainer /> */}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        userId: state.visitProfilePage.data.userId,
        status: state.visitProfilePage.data.aboutMe,
        avatar: state.visitProfilePage.data.photos?.large,
        name: state.visitProfilePage.data.fullName,
        jobSeek: state.visitProfilePage.data.lookingForAJob,
        jobSeekDescr: state.visitProfilePage.data.lookingForAJobDescription,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (id) => dispatch(loadUserData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitProfileContainer)