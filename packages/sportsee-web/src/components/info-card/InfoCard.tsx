import { FC } from "react";
import "./infoCard.css";

interface InfoCardProps {
  iconPath: string;
  value: number;
  type: string[];
}

const InfoCard: FC<InfoCardProps> = ({ iconPath, value, type }) => {
  return (
    <div className="infocard-container">
      <img src={iconPath} />
      <div className="infocard-text">
        <p className="infocard-value">
          {value}
          {type[1]}
        </p>
        <p className="infocard-desc">{type[0]}</p>
      </div>
    </div>
  );
};

export default InfoCard;
