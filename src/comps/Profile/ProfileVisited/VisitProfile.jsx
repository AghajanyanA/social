import React from "react";
import { useSelector } from "react-redux";
import { getVisitedProfileContacts } from "./selectors";
import s from './VisitProfile.module.css'



function VisitProfile({ avatar, name, aboutMe, jobSeek, jobSeekDescr, status }) {
    const contacts = useSelector(getVisitedProfileContacts)
    const unloaded = 'https://www.svgrepo.com/show/381153/protection-personal-computer-privacy-firewall-security.svg'
    debugger
    return (

        <div>
            <div className={s.profileWrap} >
                <div className={s.avaInfo}>
                    <img width='700px' height='200px' src={avatar != null ? avatar : unloaded} alt="Not available" />

                    <div className={s.userName} >
                        {name}

                        <div className={s.status}>
                            {status}
                        </div>
                    </div>
                </div>

                <div className={s.aboutMe} >
                    <p>About me: {aboutMe || 'no text'}</p>
                    Looking for a job: {jobSeek ? 'Yes!' : 'No!'} <br />
                    {jobSeek && jobSeekDescr} <br />
                    {contacts}
                </div>
            </div>
        </div>

    )
}



export default VisitProfile