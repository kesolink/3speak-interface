import PropTypes from "prop-types";
import "./PlayVideo.scss";
import { FaEye } from "react-icons/fa";

import { LuTimer } from "react-icons/lu";
import { BiDislike, BiLike } from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_PROFILE,
  GET_TOTAL_COUNT_OF_FOLLOWING,
  GET_VIDEO,
} from "../../graphql/queries";
import ReactJWPlayer from "react-jw-player";
import dayjs from "dayjs";
import BlogContent from "./BlogContent";
import CommentSection from "./CommentSection";
// import ReactPlayer from 'react-player';

const PlayVideo = ({ videoDetails, author, permlink }) => {
  console.log(author);

  const {
    data: getVideo,
    loading,
    error,
  } = useQuery(GET_VIDEO, { variables: { author, permlink }, ssr: true });
  console.log(getVideo);
  const spkvideo = getVideo?.socialPost.spkvideo;
  const [videoUrlSelected, setVideoUrlSelected] = useState(null);

  const { data: followData, loading: followLoading } = useQuery(
    GET_TOTAL_COUNT_OF_FOLLOWING,
    {
      variables: { id: videoDetails?.author?.id || "" }, // use default value to avoid issues
    }
  );

  const getUserProfile = useQuery(GET_PROFILE, {
    variables: { id: videoDetails?.author?.id },
  });

  const profile = getUserProfile.data?.profile;
  const content = videoDetails?.body.split("\n");

  useEffect(() => {
    if (spkvideo?.play_url) {
      const url = spkvideo.play_url;
      const result = url.includes("ipfs://")
        ? url.split("ipfs://")[1] // Extract the IPFS hash
        : url;
      console.log(result);
      setVideoUrlSelected(`https://ipfs-3speak.b-cdn.net/ipfs/${result}`);
    }
  }, [spkvideo]);

  if (loading) {
    return <div>Loadingg.......</div>;
  }

  console.log(videoDetails);

  return (
    <div className="play-video">
      <ReactJWPlayer
        licenseKey="64HPbvSQorQcd52B8XFuhMtEoitbvY/EXJmMBfKcXZQU2Rnn"
        customProps={{
          playbackRateControls: true,
          autostart: false,
        }}
        file={`${videoUrlSelected}`}
        image={`${spkvideo?.thumbnail_url}`}
        id="botr_UVQWMA4o_kGWxh33Q_div"
        playerId={"1242424242"}
        playerScript="https://cdn.jwplayer.com/libraries/HT7Dts3H.js"
      ></ReactJWPlayer>
      {/* <ReactPlayer 
        url={`${videoUrlSelected}`}
        controls 
        playing={false} 
        light={spkvideo?.thumbnail_url} // This shows the thumbnail
        width="100%" 
        height="100%" 
      /> */}

      <h3>{videoDetails?.title}</h3>
      <div className="play-video-info">
        <div className="wrap-left">
          <div className="wrap">
            <FaEye />
            <span>23</span>
          </div>
          <div className="wrap">
            <LuTimer />
            <span>{dayjs(videoDetails?.created_at).fromNow()}</span>
          </div>
        </div>
        <div className="wrap-right">
          <span className="wrap">
            <BiLike className="icon" />
            <span>{videoDetails?.stats.num_votes}</span>
          </span>
          <span className="wrap">
            <BiDislike className="icon" />
            <span>0</span>
          </span>
          <span className="wrap">
            <GiTwoCoins className="icon" />
            <span>${videoDetails?.stats.total_hive_reward.toFixed(2)}</span>
          </span>
          <span>Reply</span>
        </div>
      </div>
      <hr />
      <div className="big-mid-wrap"></div>
      <div className="publisher">
        <img src={profile?.images?.avatar} alt="" />
        <div>
          <p>{videoDetails?.author?.id}</p>
          <span>{followData?.follows?.followers_count} Followers</span>
        </div>
        <button>Follow </button>
      </div>

      <div className="description-wrap">
        <div
          className="blog-content"
          // dangerouslySetInnerHTML={{ __html: videoDetails?.body }}
        >
          <BlogContent content={content} />
        </div>
      </div>

      <CommentSection
        videoDetails={videoDetails}
        author={author}
        permlink={permlink}
      />
    </div>
  );
};

PlayVideo.propTypes = {
  videoDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail_url: PropTypes.string,
    body: PropTypes.string,
    stats: PropTypes.shape({
      num_votes: PropTypes.number,
      total_hive_reward: PropTypes.number,
      num_comments: PropTypes.number,
    }),
    author: PropTypes.shape({
      follower_count: PropTypes.number,
      id: PropTypes.string,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.string,
        likes: PropTypes.number,
        dislikes: PropTypes.number,
        reward: PropTypes.number,
      })
    ),
  }),
  author: PropTypes.string.isRequired,
  permlink: PropTypes.string.isRequired,
};

export default PlayVideo;
