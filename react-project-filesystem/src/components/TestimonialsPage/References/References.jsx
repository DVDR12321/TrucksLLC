import SimpleContainer from "./SimpleContainer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import {
  ReviewsContainingDiv,
  StyledHeader,
  StyledP,
} from "./StyledComponents.jsx";

const awards = [
  {
    id: '1',
    title: "Coyote",
    subtitle: "Coyote Pack Carrier member",
    progress: <ProgressBar color1="#6d0713" color2="#942633" number="95" />,
  },
  {
    id: '2',
    title: "CH Robinson",
    subtitle: "Our longest standing partners",
    progress: <ProgressBar color1="#baf5ff" color2="#819093" number="100" />,
  },
  {
    id: '3',
    title: "XPO Logistics",
    subtitle: "Platinum tier XPO carrier",
    progress: <ProgressBar color1="#1be44c" color2="#139b34" number="90" />,
  },
  {
    id: '4',
    title: "Echo Global Logistics",
    subtitle: "Core carrier member",
    progress: <ProgressBar color1="#1be44c" color2="#139b34" number="99" />,
  },
];

export const References = () => {
  return (
    <SimpleContainer
      Header="Ratings and awards"
      Body={awards.map(({ title, subtitle, progress }) => (
        <ReviewsContainingDiv>
          <div key={awards.id} style={{ display: "flex", alignItems: "center" }}>
            {progress}
          </div>
          <div>
            <StyledHeader>{title}</StyledHeader>
            <StyledP>{subtitle}</StyledP>
           
          </div>
        </ReviewsContainingDiv>
      ))}
      //  ovo treba lepse da se napise sve... ima previse divova.
    ></SimpleContainer>
  );
};
