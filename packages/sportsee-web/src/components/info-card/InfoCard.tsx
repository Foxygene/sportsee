import { FC } from "react";

interface InfoCardsProps {
  iconPath: string;
  value: number;
  type: string[];
}

const InfoCards: FC<InfoCardsProps> = ({ iconPath, value, type }) => {
  return (
    <div>
      <img src={iconPath} />
      <p>
        {value}
        {type[1]}
      </p>
      <p>{type[0]}</p>
    </div>
  );
};

export default InfoCards;
