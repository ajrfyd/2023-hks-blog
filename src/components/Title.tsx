import styled, { css } from "styled-components";

type TitleProps = {
  title: string;
  size?: number;
}

const Title = ({ title, size }: TitleProps) => <TitleTxt title={title} size={size}>{title}</TitleTxt>

export default Title;

const TitleTxt = styled.p<TitleProps>`
  font-family: Chicago;
  font-size: ${({ size }) => size ? `${size}rem` : "3rem"};
  text-align: center;
  margin: .5rem 0;
`;