import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    await requests
      .get(blogRequestUrls.notes.getNotes)
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setNotes(get(response, "data", []));
        }
      })
      .catch((e) => {
        const error = ErrorHandler(e);
        console.log(error.message);
        toast.error(get(error, "message", ""));
      });
  };
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => toast.success("test")}>Test toast</button>
      {notes.map((note, index) => (
        <div key={index}>
          <h2>{get(note, "title", "")}</h2>
          <p>{get(note, "content", "")}</p>
          <p>Category: {get(note, "category", "")}</p>
        </div>
      ))}
    </div>
  );
};

export default index;
