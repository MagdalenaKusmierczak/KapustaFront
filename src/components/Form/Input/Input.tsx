import { useMatchMedia } from "../../../utils/hooks/useMatchMedia";
import icons from "../../../assets/icons.svg";
import {
  NumberMobil,
  InputMobile,
  Span,
  Number,
  InputNumber,
  Image,
} from "./Input.styled";

export default function InputCalc() {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {isMobile ? (
        <NumberMobil>
          <InputMobile type="number" placeholder="0.00" name="sum" />
          <Span>
            <Image width="20px" height="20px">
              <use href={`${icons}#calculator`}></use>
            </Image>
          </Span>
        </NumberMobil>
      ) : (
        <Number>
          <InputNumber type="number" placeholder="0.00 " name="sum" />
          <Image width="20px" height="20px">
            <use href={`${icons}#calculator`}></use>
          </Image>
        </Number>
      )}
    </>
  );
}
