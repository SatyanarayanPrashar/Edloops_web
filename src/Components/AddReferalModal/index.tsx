import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { RootState } from "@/redux";
import { callUserApi, updateReferralModal } from "@/redux/ui/ui.action";
import { get } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const index = () => {
  const dispatch = useDispatch();
  const [referralCode, setReferralCode] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const hideShowModal = () => dispatch(updateReferralModal({ show: false }));
  const handleReferralModal = useSelector(
    (state: RootState) => state.uiState.showReferralModal
  );
  const loggedInUser = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );

  const handleChange = (e: any) => {
    setReferralCode(e.target.value);
  };

  const useReferralCode = async () => {
    const referral = {
      code: referralCode,
    };
    setBtnLoading(true);
    await requests
      .put(blogRequestUrls.referralCode(loggedInUser), referral)
      .then((res) => {
        const response = ResponseHandler(res);
        // console.log(response, "response");
        if (get(res, "data.message", "")) {
          setBtnLoading(false);
          dispatch(updateReferralModal({ show: false }));
          dispatch(callUserApi({ call: true }));
          toast.success("Points added successfully!");
        } else {
          setBtnLoading(false);
          toast.error(get(res, "data.error", ""));
        }
      })
      .catch((e) => {
        setBtnLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "error", ""));
      });
  };
  return (
    <>
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
                <h4 className="modal-title mb-0">Use Referral</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={hideShowModal}
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <form>
                  <div className="field auth__field">
                    <div className="field__wrap">
                      <input
                        name="title"
                        className="field__input"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Code Here"
                        value={referralCode}
                        onChange={handleChange}
                      />
                      <div className="field__icon">
                        <i className="fa fa-ticket"></i>
                      </div>
                    </div>
                  </div>
                  <div className="input d-flex justify-content-end align-items-center">
                    <button
                      type="button"
                      className="site-button"
                      onClick={useReferralCode}
                    >
                      {btnLoading ? (
                        <ClipLoader
                          color={"#40a944"}
                          loading={btnLoading}
                          size={25}
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default index;
