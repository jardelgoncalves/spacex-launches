import Link, { LinkProps } from 'next/link'
import * as S from './ButtonLink.styles'

type ButtonLinkProps = LinkProps & {
  text: string
}

export const ButtonLink = ({ text, ...linkProps }: ButtonLinkProps) => {
  return (
    <Link {...linkProps}>
      <S.Wrap>
        {text}
      </S.Wrap>
    </Link>
  )
}