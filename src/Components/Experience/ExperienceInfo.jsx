/* eslint-disable react/prop-types */
// import "../../styles/ExperienceInfo.css";

const ExperienceInfo = ({ info }) => {

    const {startDate, endDate, companyName, positionTitle } = info;


  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
            {startDate}
            {startDate && endDate && ' - '}
            {endDate}
        </p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{companyName}</p>
        <p className="experience-info-positionTitle">{positionTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceInfo;