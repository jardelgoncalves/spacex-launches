import Image from 'next/image'
import * as S from './LaunchCover.styles'

type LaunchCoverProps = {
  src: string
  alt: string
}

export const LaunchCover = ({ src, alt }: LaunchCoverProps) => {
  return (
    <S.Container>
      <Image layout='fill' src={src} alt={alt} objectFit="cover" />
    </S.Container>
  )
}