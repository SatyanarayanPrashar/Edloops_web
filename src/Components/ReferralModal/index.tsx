import { RootState } from "@/redux";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCopyToClipboard } from "@uidotdev/usehooks";

interface IProps {
  setHandleReferralModal: any;
  handleReferralModal: boolean;
}

const index = ({ setHandleReferralModal, handleReferralModal }: IProps) => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const userInfo = useSelector((state: RootState) => state.uiState.userInfo);

  const handleReferralCode = () => {
    copyToClipboard(
      "Hey, Do you know? You can learn Data Science, Flutter Development, System design or Web3 development for Free on EdLoops? Signup and use my referral code to get 100 edcoins: " +
        userInfo.referral_code
    );
    setChangeIcon(true);
    setTimeout(() => {
      setHandleReferralModal(false);
    }, 1000);
  };
  // console.log(handleReferralModal, "rererererer");

  return (
    <>
      <div
        className={`modal ${handleReferralModal ? "show" : ""}`}
        id="add_edu"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title mb-0">Invite Friends</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setHandleReferralModal(false)}
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form>
                <div className="field auth__field border rounded-2 px-3 py-2">
                  <div className="field__wrap d-flex justify-content-between align-items-center">
                    <div>
                      <p>
                        Free Leaning materials best not kept secret. <br />
                        Invite your friends to learn together on Edloops, and
                        earn <b>100 Edcoins</b> <br />
                        Join our Discord community to make new study buddies.{" "}
                        <br />
                      </p>
                      <div className="d-flex">
                        Invite code:
                        <h5>{userInfo.referral_code}</h5>
                      </div>
                      <div className="d-flex">
                        <button
                          className="refer-modal-bttn"
                          type="button"
                          onClick={handleReferralCode}
                        >
                          {changeIcon ? "Copied" : "Copy Code"}
                          <i
                            className={`${
                              changeIcon ? "fa fa-check" : "fa fa-copy"
                            } fs-5 ps-2`}
                          ></i>
                        </button>

                        <a
                          href="whatsapp://send?text=Hey, Do you know? You can learn Data Science, Flutter Development, System design or Web3 development for Free on EdLoops? Signup and use my referral code to get 100 edcoins."
                          data-action="share/whatsapp/share"
                          rel="nofollow noopener"
                          target="_blank"
                          className="refer-modal-bttn text-decoration-none d-flex align-items-center justify-content-center pb-1"
                        >
                          <p className="m-0 pe-2 text-dark">Share on</p>
                          <img
                            src="/svg/whatsapp.svg"
                            style={{ height: "27px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
