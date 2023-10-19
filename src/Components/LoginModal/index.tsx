import { firebaseConfig } from "@/helper/utils";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";

interface IProps {
  setHandleModal: any;
  handleModal: any;
}

const Index = ({ setHandleModal, handleModal }: IProps) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <>
      <>
        <div className={`modal ${handleModal ? "show" : ""}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                {/* <h4 className="modal-title mb-0">ALERT</h4> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setHandleModal(false)}
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <h4 className="mb-4">Please login to continue</h4>
                <div>
                  <button
                    className="google-sign-in-button rounded"
                    onClick={signInWithGoogle}
                  >
                    <div className="google-logo-wrapper border-0 me-2">
                      <img
                        className="google-logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
                        alt="Google logo"
                      />
                    </div>
                    <span className="google-sign-in-text">
                      Sign in with Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Index;
