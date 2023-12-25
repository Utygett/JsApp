import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className='content__img' src='https://image.winudf.com/v2/image/Y29tLndhdGVyZmFsbHdhbGxwYXBlci5oZC53YXRlcmZhbGxwaWN0dXJlcy5waG90b3MuYmFja2dyb3VuZC5jdXRlLmNvb2wuYXJ0LndhdGVyZmFsbGltYWdlcy5oZC5mcmVlX3NjcmVlbl81XzE1MzMyNTAzMDZfMDc4/screen-5.jpg?fakeurl=1&type=.jpg'></img>
            </div>
            <div>ava + decription</div>
            <div>
                My posts
                <div>new post</div>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    )
}

export default Profile;