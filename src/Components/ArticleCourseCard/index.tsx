import React from 'react';

interface IProps {
    imageSrc: any;
    title: any;
    text: any;
    linkto: any;
  }

const index = (props: IProps) => {
  const { imageSrc, title, text, linkto} = props;
  return (
    <div className='CourseCard'>

        <div className="course-left-section">
            <div className="course-img">
            <img src={imageSrc} alt="Course Image" />
        </div>
        
        <div className='course-right-section'>
            <h2>{title}</h2>
            <div className="course-benefits">
                {text}
            </div>
            <div className="course-join-link">
                <button
                    onClick={() => window.open(linkto, "_blank")}
                    className="explore_button fw-500 px-3 py-2 d-flex align-items-center justify-content-center"
                    type="button"
                    >
                    Enroll{" "}
                    <span>
                        <i className="fa-solid fa-angle-right ms-2"></i>
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;