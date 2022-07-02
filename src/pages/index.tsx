import type { GetStaticProps } from 'next'
import { revalidateWith } from 'utils/revalidate-with'
import { getLaunchesPast } from 'graphql/queries/getLaunchesPast'


export const getStaticProps: GetStaticProps = async () => {
  const launches = await getLaunchesPast()

  return {
    props: {
      launches,
      meta: {
        title: "SpaceX Launches",
        description: "SpaceX Launches with Next.JS + GraphQL and Styled Components"
      }
    },
    revalidate: revalidateWith('7d')
  }
}

export { default } from 'components/pages/Home'
