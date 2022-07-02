import { gql } from '@apollo/client'
import { client } from 'lib/apollo'
import { getYoutubeVideo } from 'utils/get-youtube-video'
import { launchImageByIndex } from 'utils/launch-image-by-index'

export type LaunchType = {
  id: string
  mission_name: string
  image: string
  rocket: {
    rocket_name: string
  }
  details?: string
  links: {
    article_link?: string
    video_link?: string
  }
}

type LaunchResponseType = {
  launch: LaunchType
}
export const getLauchById = (id: string) => {
  const query = gql`
    {
      launch(id: ${id}) {
        mission_name
        details
        rocket {
          rocket_name
        }
        links {
          article_link
          video_link
        }
        launch_date_utc
      }
    }
  `

  return client.query<LaunchResponseType>({ query })
    .then(({ data: { launch } }) => launch)
    .then((launch) => ({
      ...launch,
      links: {
        ...launch.links,
        video_link: getYoutubeVideo(launch.links.video_link)
      },
      image: launchImageByIndex(Number(id))
    }))
}