import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './Header.styles'

export const Header = () => {
  const { asPath } = useRouter()
  
  return (
    <S.Container transparent={asPath === '/'}>
      <S.Wrap>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="SpaceX" width={100} height={15} />
          </a>
        </Link>
        <Link href="/" >
          <a>Home</a>
        </Link>
      </S.Wrap>
    </S.Container>
  )
}