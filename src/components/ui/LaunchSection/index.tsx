import type { LaunchType } from 'graphql/queries/getLaunchesPast'
import Image from 'next/image'
import { ButtonLink } from '../ButtonLink'
import * as S from './LaunchSection.styles'

export const LaunchSection = ({ image, mission_name, id }: LaunchType) => {
  return (
    <S.Container>
      <S.Content>
        <S.SubTitle>Recent Launch</S.SubTitle>
        <S.Title>{mission_name}</S.Title>
        <ButtonLink href={`/${id}`} text="Rewatch" />
      </S.Content>
      <S.ImageContainer>
        <Image
          layout='fill'
          objectFit='cover'
          src={image}
          alt=""
        />
      </S.ImageContainer>
    </S.Container>
  )
}