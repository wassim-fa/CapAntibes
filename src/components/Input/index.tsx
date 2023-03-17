import * as S from './styles'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  opt_fontSize: string
}
const Input = ({ opt_fontSize, ...props }: InputProps) => (
  <S.Wrapper
    className={`sc-input ${props.className}`}
    {...props}
    fontSize={opt_fontSize}
  />
)

export default Input
