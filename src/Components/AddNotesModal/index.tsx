import { RootState } from "@/redux";
import { updateNotesModal } from "@/redux/ui/ui.action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

const index = () => {
  const dispatch = useDispatch();
  const hideShowModal = () => dispatch(updateNotesModal({ show: false }));

  const handleShowLoginModal = useSelector(
    (state: RootState) => state.uiState.showNotesModal
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      content: "",
    },
    onSubmit: async (values: {
      title: string;
      category: string;
      content: string;
    }) => {},
  });
  return (
    <>
      <div
        className={`modal ${handleShowLoginModal ? "show" : ""}`}
        id="add_edu"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title mb-0">Add Notes</h4>
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
                      placeholder="Enter Title"
                    />
                    <div className="field__icon">
                      <i className="fa fa-user "></i>
                    </div>
                  </div>
                </div>
                <div className="field auth__field">
                  <div className="field__wrap">
                    <input
                      name="category"
                      className="field__input"
                      type="text"
                      autoComplete="off"
                      placeholder="Enter Category"
                    />
                    <div className="field__icon">
                      <i className="fa fa-user "></i>
                    </div>
                  </div>
                </div>
                <div className="field auth__field">
                  <div className="field__wrap w-100 d-flex align-center">
                    <textarea
                      className="content__textarea field__input pl-0 pt-3"
                      placeholder="Write your content here..."
                      cols={10}
                      rows={3}
                      autoComplete="off"
                      name="content"
                    />
                    <div className="field__icon">
                      <i className="fa fa-pen"></i>
                    </div>
                  </div>
                </div>
                <div className="input d-flex justify-content-end align-items-center">
                  <button type="submit" className="site-button">
                    Submit
                  </button>
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
