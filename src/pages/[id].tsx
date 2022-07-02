import { LaunchArticle } from "components/pages/LaunchArticle";
import { getLauchById, LaunchType } from "graphql/queries/getLaunchById";
import { GetServerSideProps } from "next";

export default function LaunchItem(props: LaunchType) {
  return <LaunchArticle {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string
    const launch = await getLauchById(id as string)
  
    return {
      props: launch,
    }
  } catch {
    return {
      notFound: true,
    }
  }
}