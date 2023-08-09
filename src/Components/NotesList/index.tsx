import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddNotesModal from "@/Components/AddNotesModal";
import { useDispatch } from "react-redux";
import { updateNotesModal } from "@/redux/ui/ui.action";
import PageLoader from "../PageLoader";

interface IProps {
  notesData?: any;
}

const index = (props: IProps) => {
  const { notesData } = props;
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const showModal = () => {
    dispatch(updateNotesModal({ show: true }));
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <>
        <div className="d-flex align-items-center">
          <h1>Notes</h1>
          <button
            className="add_notes ms-5 p-2 rounded-4 px-3"
            onClick={showModal}
          >
            <i className="fa fa-plus fs-16"></i>
          </button>
        </div>
        <button onClick={() => toast.success("Test")}>Test toast</button>
        {notesData.map((note: any, index: any) => (
          <div key={index}>
            <h2>{get(note, "title", "")}</h2>
            <p>{get(note, "content", "")}</p>
            <p>Category: {get(note, "category", "")}</p>
          </div>
        ))}
        <AddNotesModal />
      </>
    </>
  );
};

export default index;
