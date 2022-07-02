import { LaunchType } from 'graphql/queries/getLaunchesPast'
import { LaunchSection } from 'components/ui/LaunchSection'

type HomeProps = {
  launches: LaunchType[]
}

const Home = ({ launches }: HomeProps) => {
  return (
    <main>
      {launches?.map(launch => (
        <LaunchSection
          key={launch.id}
          {...launch}
        />
      ))}
    </main>
  )
}

export default Home
