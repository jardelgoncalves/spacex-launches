import { LaunchCover } from 'components/ui/LaunchCover'
import { LaunchType } from 'graphql/queries/getLaunchById'
import * as S from './LaunchArticle.styles'

export const LaunchArticle = ({ image, mission_name, rocket, details, links }: LaunchType) => {
  return (
    <S.Main>
      <LaunchCover src={image} alt={mission_name} />
      <S.Content>
        <S.SubTitle>Recent Launch</S.SubTitle>
        <S.Title>{mission_name}</S.Title>
        <S.RocketName><strong>Rocket Name</strong>: {rocket.rocket_name}</S.RocketName>
        {details && (
          <S.Description>
            {details}
            <br />
            {links.article_link && <a href={links.article_link} target="_blank" rel="noreferrer">Read More</a>}
          </S.Description>
        )}
      </S.Content>
      {links.video_link && (
        <S.IframeWrap>
          <S.WatchTitle>Watch the launch: {rocket.rocket_name}</S.WatchTitle>
          <iframe src={links.video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </S.IframeWrap>
      )}
    </S.Main>
  )
}