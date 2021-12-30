import React, { useState, useMemo } from "react";
import c from './users.module.css'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'


let UsersFin = (props) => {
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
            start: limit.start - 1,
            end: limit.end - 1
        })
    }

    const handleClickOnRightArrow = () => {
        props.handlePageChange(props.currentPage + 1)
        setLimit({
            start: limit.start + 1,
            end: limit.end + 1
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



    // const pageItem = (page) => {
    //     return <span
    //         className={props.currentPage === page ? c.selectedPage : c.pages}
    //         onClick={ pageNumberClick(page) } >
    //         {page}
    //     </span>
    // }

    return (
        <div>
            <div className={c.paginationwrap} >
                {limit.start !== 0 && <ImArrowLeft onClick={handleClickOnLeftArrow} />}

                {/* before dots */}
                <span> 
                    {active === false && props.currentPage !== pages.length - 3 ? 
                    pages.filter(item => item <= limit.end && item >= limit.start)
                    .map(page => <span
                        className={ props.currentPage === page ? c.selectedPage : c.pages }
                        onClick={() => pageNumberClick(page) } >
                        {page}
                    </span>) : 
                    pages.filter(item => item <= limit.end && item >= limit.start)
                    .map(page => <span
                        className={props.currentPage === page ? c.selectedPage : c.pages}
                        onClick={() => {setActive(false); pageNumberClick(page) }} >
                        {page}
                    </span>)
                    }
                </span>

                <span>...</span>

                {/* after dots */}
                {pages.filter(item => item > pages.length - 3).map(page => <span
                    className={props.currentPage === page ? c.selectedPage : c.pages}
                    onClick={() => {setActive(true); props.currentPage !== page && props.handlePageChange(page) }} >
                    {page}
                </span>)}
                {props.currentPage !== pages.length && <ImArrowRight onClick={handleClickOnRightArrow} />}
            </div>


            <div>
                {props.users.map(users => <div className={c.usersblock} key={users.id}>
                    <img className={c.avatarURL} src={users.photos.small != null ? users.photos.small : unloaded} alt="sorry" />
                    <div className={c.names}>
                        {users.name}
                    </div>

                    <div className={c.followBTNs}>
                        {users.following ?
                            <button className={c.unfollowBTN} onClick={() => props.followToggle(users.id)} >Unfollow</button> :
                            <button className={c.followBTN} onClick={() => props.followToggle(users.id)} >Follow</button>}
                    </div>
                    <div className={c.userslocation}>
                        <img className={c.pinPIC} src='https://www.freeiconspng.com/uploads/red-location-icon-map-png-4.png' alt='' />{'{users.location.city}'}, {'{users.location.country}'}
                    </div>
                    <div className={c.usersstatus}>
                        {users.status != null ? users.status : 'No status'} <br />UID: {users.id}
                    </div>

                </div>)
                }
            </div>

        </div>
    )
}

export default UsersFin