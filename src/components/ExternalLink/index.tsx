import * as S from './styles'
import { PropsWithChildren } from 'react'

interface ExternalLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  link: string
}
const ExternalLink = (props: PropsWithChildren<ExternalLinkProps>) => (
  <S.Wrapper
    className={`sc-external-link ${props.className}`}
    href={props.link}
  >
    {props.children}
  </S.Wrapper>
)

export default ExternalLink
