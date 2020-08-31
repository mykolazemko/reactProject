import React from 'react'
import style from './profileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={style.avatar} src="https://i.pinimg.com/474x/68/4c/2b/684c2b748c1f9dbde4bf5b9b87678d5d.jpg" alt="avatar"/>
                <p>ProfileInfo</p>
            </div>
        </div>
    )
}

export default ProfileInfo