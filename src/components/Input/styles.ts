import styled from 'styled-components'

type WrapperProps = {
  fontSize: string
}
export const Wrapper = styled.input<WrapperProps>`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.fontColors.primary};
  padding-bottom: 2px;
  margin: 15px 0 20px 0;
  color: ${(props) => props.theme.fontColors.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;

  ::placeholder {
    color: ${(props) => props.theme.fontColors.primary};
    font-size: ${(props) => props.fontSize};
    font-weight: bold;
    opacity: 0.5;
    text-transform: uppercase;
  }
  :focus-visible {
    outline: none;
  }
`
