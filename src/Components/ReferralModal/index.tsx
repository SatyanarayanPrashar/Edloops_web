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
    copyToClipboard(userInfo.referral_code);
    setChangeIcon(true);
    setTimeout(() => {
      setHandleReferralModal(false);
    }, 1000);
  };
  console.log(handleReferralModal, "rererererer");

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
              <h4 className="modal-title mb-0">Copy Referral Code</h4>
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
                      <h2>{userInfo.referral_code}</h2>
                    </div>

                    <div
                      className="field__icon cursor-pointer"
                      onClick={handleReferralCode}
                    >
                      <button type="button">
                        <i
                          className={`${
                            changeIcon ? "fa fa-check" : "fa fa-copy"
                          } fs-4`}
                        ></i>
                      </button>
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
