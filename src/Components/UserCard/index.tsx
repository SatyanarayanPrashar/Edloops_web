import { publicRoutes } from '@/enums/route.enum';
import React from 'react';
import NextLink from "next/link";

interface UserCardProps {
    name: string;
    coins: string;
    referral: string;
    enrolledcourses: string[]; // Change the type to string array
}

const courseNameMapping: Record<string, string> = {
    '6': 'Web3',
    '8': 'Flutter',
    '12': 'System Design',
    '13': 'Data Science',
    // Add more mappings as needed
};

const UserCard: React.FC<UserCardProps> = ({
    name,
    coins,
    referral,
    enrolledcourses,
}) => {
    return (
        <div>  
        <div className='userCard'>
            <div className="user-name">
                <div className="svg-feature"><img src="/svg/fire.svg" /> 7 day Streak</div>
                <div className="svg-feature"><img src="/svg/user.svg" /> {name}</div>
                <div className="svg-feature"><img src="/svg/coin.svg" /> {coins} Edcoins</div>
                <a href="   POP UP displaying referral code and a copy bttn ">
                    <div className="svg-feature"><img src="/svg/referral.svg" /> Refer Friends</div>
                </a>
                {/* <div className="svg-feature"><img src="/svg/referral.svg" /> <h6>{referral}</h6> Referral code</div> */}
                <div className="svg-feature"><img src="/svg/course.svg" /> Enrolled Courses:</div>
            </div>
            <div className='coursename'>
                <ul>
                    {enrolledcourses.map((courseId, index) => (
                        <><NextLink href={publicRoutes.curriculum + `/${courseId} `}>
                            <li key={index}>{courseNameMapping[courseId]}</li>
                        </NextLink></>
                    ))}
                </ul>
            </div>
        </div>
        <div className="reffer-bttn">
            <a href="       POP UP with a input to get the referral code and ok bttn     ">
                <div className="svg-feature"><img src="/svg/celebrate.svg" /> Use referral code</div>
            </a>
        </div>
    </div>
    );
};

export default UserCard;

{/* <NextLink href={publicRoutes.curriculum + `/${courseId} `}></NextLink> */ }