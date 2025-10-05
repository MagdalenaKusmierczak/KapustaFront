import { useLocation } from "react-router";
import { useMatchMedia } from "../../utils/hooks/useMatchMedia";
import githubIcon from "../../assets/github_icon.svg";
import linkedInIcon from "../../assets/linkedin_icon.svg";
import emailIcon from "../../assets/email_icon.svg";
import {
  FooterContainer,
  AddressContainer,
  AddressList,
  Icon,
  Paragraph,
} from "./Footer.styled";

const Footer = () => {
  const location = useLocation();

  const { isMobile } = useMatchMedia();

  const isExpenses = location.pathname === "/expenses";

  const isIncome = location.pathname === "/income";

  // Should the component decide on its display on its own?
  // Wouldn't it be better to conditionally render it in the parent?
  const validator = (isExpenses && isMobile) || (isIncome && isMobile);

  if (validator) {
    return null;
  }

  return (
    <FooterContainer>
      <Paragraph>
        Developed by:<span>Magdalena Kuśmierczak</span>
      </Paragraph>
      <AddressContainer>
        <AddressList>
          <li>
            <a
              href="https://github.com/MagdalenaKusmierczak"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                src={githubIcon}
                alt="Github link"
                width="25px"
                height="25px"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/magdalena-kusmierczak-4b94a7303"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                src={linkedInIcon}
                alt="LinkedIn link"
                width="25px"
                height="25px"
              />
            </a>
          </li>
          <li>
            <a href="mailto:magdalenaxjare@gmail.com">
              <Icon
                src={emailIcon}
                alt="Email address"
                width="25px"
                height="25px"
              />
            </a>
          </li>
        </AddressList>
      </AddressContainer>
    </FooterContainer>
  );
};

export default Footer;
