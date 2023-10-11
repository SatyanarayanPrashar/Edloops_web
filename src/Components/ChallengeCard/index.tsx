import React from 'react';
import NextLink from "next/link";
import { publicRoutes } from "@/enums/route.enum";

const index = () => {
  return (
    <div className='ChallengeCard'>
        <div className="challenge-left-section">
        <div className="challenge-logo">
          <img src="/img/challenge.gif" alt="45 Days Upskill Chasllenge" />
        </div>
        <div>
            <h2>45 Days Upskill Challenge</h2>
            <ul className="chellenge-benefits-list">
            <li>Struggling to stay consistent while upskilling?</li>
            <li>or having trouble starting your journey due to procrastination? 😫</li>
            <li>Accept the 45 day Upskill challenge, win exciting prizes🏆 &</li>
            <li>Meet other dedicated souls and upskill together⬆️</li>
            </ul>
            <NextLink href={publicRoutes.challenge}>
                <button
                    // onClick={() => window.open("https://discord.gg/NWRBKwpSsD", "_blank")}
                    className="challenge-link fw-500 px-3 py-2 d-flex align-items-center justify-content-center"
                    type="button"
                    >
                    Know More{" "}
                    <span>
                        <i className="fa-solid fa-angle-right ms-2"></i>
                    </span>
                </button>
            </NextLink>
            {/* </div> */}
        </div>
      </div>
      {/* <div className="challenge-right-section">
        <div className="qr-code">
          <img src="/img/community.jpg" alt="QR Code" />
        </div>
      </div> */}
    </div>
  );
};

export default index;