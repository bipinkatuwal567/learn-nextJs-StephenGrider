"use client";

import { useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {
    const session = useSession();
    console.log(session);

    if(session.data?.user){
        return <div>Signed In</div>
    }else{
        return <div>Signed Out</div>
    }
}

export default Profile