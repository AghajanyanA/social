import React, { useState, useMemo } from "react";
import c from './users.module.css'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'
import { useHistory } from "react-router-dom";


const UsersFin = (props) => {
    const unloaded = 'https://www.svgrepo.com/show/381153/protection-personal-computer-privacy-firewall-security.svg'
    const [limit, setLimit] = useState({
        start: 0,
        end: 5
    })

    const pages = useMemo(() => {
        const _pages = []

        const pagesCount = Math.ceil(props.totalUsers / props.pageSize)
        for (let i = 1; i <= pagesCount; i++) {
            _pages.push(i)
        }

        return _pages
    }, [props.totalUsers, props.pageSize])


    const handleClickOnLeftArrow = () => {
        props.handlePageChange(props.currentPage - 1)
        setLimit({
            start: limit.start - 2,
            end: limit.end - 2
        })
    }

    const handleClickOnRightArrow = () => {
        props.handlePageChange(props.currentPage + 1)
        setLimit({
            start: limit.start + 2,
            end: limit.end + 2
        })
    }
    const pageNumberClick = (page) => {
        setLimit({
            start: page - 2,
            end: page + 2
        })
        props.currentPage !== page && props.handlePageChange(page)
    }

    const [active, setActive] = useState(false)
    const history = useHistory()
    const handleRedirect = (e) => {
        const id = e.currentTarget.dataset.userid
        if (!id) {
            return
        }

        history.push(`/profile/${id}`)

    }


    const unfollowClickHandler = userid => props.unfollow(userid)
//fix api calls
    const followClickHandler = userid => props.follow(userid)





    return (
        <div>
            <div className={c.paginationwrap} >
                {limit.start !== 0 && <ImArrowLeft onClick={handleClickOnLeftArrow} />}

                {/* before dots */}
                <span>
                    {active === false && props.currentPage !== pages.length - 3 ?
                        pages.filter(item => item <= limit.end && item >= limit.start)
                            .map(page => <span
                                onClick={() => pageNumberClick(page)}
                                className={props.currentPage === page ? c.selectedPage : c.pages}
                                key={page} >
                                {page}
                            </span>) :
                        pages.filter(item => item <= limit.end && item >= limit.start)
                            .map(page => <span
                                className={props.currentPage === page ? c.selectedPage : c.pages}
                                onClick={() => { setActive(false); pageNumberClick(page) }}
                                key={page}>
                                {page}
                            </span>)
                    }
                </span>

                <span>...</span>

                {/* after dots */}
                {pages.filter(item => item > pages.length - 3).map(page => <span
                    className={props.currentPage === page ? c.selectedPage : c.pages}
                    onClick={() => { setActive(true); props.currentPage !== page && props.handlePageChange(page) }}
                    key={page} >
                    {page}
                </span>)}
                {props.currentPage !== pages.length && <ImArrowRight onClick={handleClickOnRightArrow} />}
            </div>


            <div>
                {props.users.map(users => <div className={c.usersblock} key={users.id}>
                    <div className={c.insideBlockWrapperAll} >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div className={c.navlink} >
                                <img data-userId={users.id} onClick={handleRedirect} className={c.avatarURL} src={users.photos.small != null ? users.photos.small : unloaded} alt="sorry" />
                                <span className={c.names} data-userId={users.id} onClick={handleRedirect} >
                                    {users.name}
                                </span>
                            </div>

                        </div>
                        
                        {users.followed ?   //  UNFOLLOW    BUTTON
                            <button disabled={props.followPending.some(id => id === users.id)} className={c.unfollowBTN} onClick={() => unfollowClickHandler(users.id) }>Unfollow</button> :

                                            //  FOLLOW      BUTTON
                            <button disabled={props.followPending.some(id => id === users.id)} className={c.followBTN} onClick={() => followClickHandler(users.id)} >Follow</button> }

                        <div className={c.usersstatus}>
                            {users.status != null ? users.status : 'No status'} <br />UID: {users.id}
                        </div>
                    </div>
                </div>)
                }
            </div>

        </div>
    )
}

export default UsersFin