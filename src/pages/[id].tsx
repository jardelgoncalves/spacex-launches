import { getLauchById } from "graphql/queries/getLaunchById";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string
    const launch = await getLauchById(id as string)
  
    return {
      props: {
        ...launch,
        meta: {
          title: `${launch.mission_name} | SpaceX Launches`,
          description: launch.details || launch.mission_name
        }
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export { default } from "components/pages/LaunchArticle";
