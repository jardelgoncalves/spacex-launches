import { gql } from '@apollo/client'
import { client } from 'lib/apollo'
import { launchImageByIndex } from 'utils/launch-image-by-index'

export type LaunchType = {
  id: string
  mission_name: string
  image: string
}

type LaunchPastResponseType = {
  launchesPast: LaunchType[]
}
export const getLaunchesPast = () => {
  const query = gql`
    {
      launchesPast(limit: 10) {
        id
        mission_name
      }
    }
  `

  return client.query<LaunchPastResponseType>({ query })
    .then(({ data: { launchesPast } }) => launchesPast)
    .then((launchPast) => launchPast.map((launch) => ({
      ...launch,
      image: launchImageByIndex(Number(launch.id))
    })))
}