import type { GetStaticProps } from 'next'
import { revalidateWith } from 'utils/revalidate-with'
import { getLaunchesPast, Launch } from 'graphql/queries/getLaunchesPast'
import Image from 'next/image'

type HomeProps = {
  launches: Launch[]
}

const Home = ({ launches }: HomeProps) => {
  return (
    <ul>
      {launches?.map(launch => (
        <li key={launch?.id}>
          <Image layout='fill' src={launch.image} alt={launch?.mission_name} />
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const launches = await getLaunchesPast()

  return {
    props: { launches },
    revalidate: revalidateWith('7d')
  }
}

export default Home
