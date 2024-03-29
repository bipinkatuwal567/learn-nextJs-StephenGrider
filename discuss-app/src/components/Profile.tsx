"use client";

import { useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {
    const session = useSession();

    if(session.data?.user){
        return <div>From Client : User is Signed In</div>
    }else{
        return <div>From Client : User is Signed Out</div>
    }
}

export default Profile