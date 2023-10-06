import React from 'react';

interface ReviewCardProps {
  profilePic: string;
  name: string;
  designation: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  profilePic,
  name,
  designation,
  review,
}) => {
  return (
    <div className="review-card">
      <div className="top-section">
        <div className="profile-pic">
          <img src={profilePic} alt={`${name}'s Profile`} />
        </div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <p className="designation">{designation}</p>
        </div>
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default ReviewCard;
