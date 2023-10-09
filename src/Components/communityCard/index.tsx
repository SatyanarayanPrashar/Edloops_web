import React from 'react';

const index = () => {
  return (
    <div className='CommunityCard'>
        <div className="left-section">
        <div className="discord-logo">
          <img src="/img/discord.png" alt="Discord Logo" />
        </div>
        <div>
            <h2>Join our Community</h2>
            <ul className="benefits-list">
            <li>Get early access to prime membership</li>
            <li>Get access to exclusive content</li>
            <li>Connect with like-minded individuals</li>
            <li>Participate in engaging discussions</li>
            </ul>
        {/* <div className="join-link">Join us <a href="https://discord.gg/NWRBKwpSsD"></a></div> */}
            <div className="Community-join-link ">
                <button
                    onClick={() => window.open("https://discord.gg/NWRBKwpSsD", "_blank")}
                    className="explore_button fw-500 px-3 py-2 d-flex align-items-center justify-content-center"
                    type="button"
                    >
                    Join{" "}
                    <span>
                        <i className="fa-solid fa-angle-right ms-2"></i>
                    </span>
                </button>
            </div>
        </div>
      </div>
      <div className="right-section">
        <div className="qr-code">
          <img src="/img/community.jpg" alt="QR Code" />
        </div>
      </div>
    </div>
  );
};

export default index;