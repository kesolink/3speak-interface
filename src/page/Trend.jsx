
import "./FirstUploads.scss"
import Cards from '../components/Cards/Cards'
import { useQuery } from "@apollo/client";
import { GET_TRENDING_FEED, TRENDING_FEED } from "../graphql/queries";
const Trend = () => {
  const { data, loading, error } = useQuery(GET_TRENDING_FEED );
  const videos = data?.trendingFeed?.items || [];
  console.log(videos)

  return (
    <div className='firstupload-container'>
        <div className='headers'>TRENDING</div>
        <Cards videos={videos} 
      loading={loading} 
      error={error} 
      className="custom-video-feed" />

    </div>
  )
}

export default Trend