import { IoChevronUpCircleOutline } from "react-icons/io5";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./Cards.scss";

dayjs.extend(relativeTime);

function Cards({
  videos = [],
  loading = false,
  error = null,
  defaultThumbnail = "default_thumb.jpg",
  defaultUsername = "Anonymous",
  linkPrefix = "/video",
  className = "",
  truncateLength = 65,
}) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const voters = (numVotes) => (numVotes <= 0 ? 0 : numVotes);

  const aboutTextTruncate = (text, maxLength) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className={`card-container ${className}`}>
      {videos.map((video, index) => (
        <Link
        to={`/watch?v=${video?.author?.username}/${video.permlink ?? "unknown"}`}
          className="card"
          key={index}
        >
          <div className="img-wrap">
            <img
              src={`https://images.hive.blog/320x0/${
                video.spkvideo?.thumbnail_url ?? ""
              }`}
              alt="thumbnail"
              onError={(e) => (e.currentTarget.src = defaultThumbnail)}
            />
            <div className="wrap">
              <div className="user-wrap flex-div">
                <FaCircleUser size={16} />
                <span>{video.author?.username ?? defaultUsername}</span>
              </div>
              <span className="play">
                {Math.floor(video.spkvideo?.duration / 60)}:
                {Math.floor(video.spkvideo?.duration % 60)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <div className="buttom-title">
              <p>{video.title}</p>
            </div>
          </div>
          <h2>
            {aboutTextTruncate(video.community?.about ?? "", truncateLength)}
          </h2>
          <h3>Vibes</h3>
          <div className="bottom-action">
            <div className="wrap-left">
              <div className="wrap flex-div">
                <IoChevronUpCircleOutline className="icon" />
                <span>${video.stats?.total_hive_reward.toFixed(2) ?? "0.00"}</span>
              </div>
              <span>|</span>
              <div className="wrap flex-div">
                <FaHeart className="icon" />
                <span>{voters(video.stats?.num_votes)}</span>
              </div>
            </div>
            <p>{dayjs(video.created_at).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// PropType validation
Cards.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      created_at: PropTypes.string,
      spkvideo: PropTypes.shape({
        thumbnail_url: PropTypes.string,
        duration: PropTypes.number,
      }),
      author: PropTypes.shape({
        username: PropTypes.string,
      }),
      community: PropTypes.shape({
        about: PropTypes.string,
      }),
      stats: PropTypes.shape({
        total_hive_reward: PropTypes.number,
        num_votes: PropTypes.number,
      }),
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.object,
  defaultThumbnail: PropTypes.string,
  defaultUsername: PropTypes.string,
  linkPrefix: PropTypes.string,
  className: PropTypes.string,
  truncateLength: PropTypes.number,
};

export default Cards;
