import React from 'react'
import "./CommentSection.scss"
import kesolink from "../../assets/image/kesolink.JPG"
import { GiTwoCoins } from 'react-icons/gi'
import { BiDislike, BiLike } from 'react-icons/bi'
import { useQuery } from '@apollo/client'
import { GET_COMMENTS } from '../../graphql/queries'
import dayjs from 'dayjs'
import DOMPurify from 'dompurify';
function CommentSection({videoDetails, author, permlink }) {
    const { data, loading, error } = useQuery(GET_COMMENTS, {
        variables: { author, permlink },
      });

      const commentData = data?.socialPost?.children || [];

      console.log(data)

  return (
    <div className="vid-comment-wrap">
            <h4>{videoDetails?.stats.num_comments} comment</h4>
            {commentData.map((comment, index)=>(
            <div className="comment" key={index}>
                <img 
              src={comment?.author?.profile?.images?.avatar || 'https://via.placeholder.com/40'} 
              alt="Author Avatar" 
            />
                <div>
                    <h3>{comment?.author?.profile.name || comment?.author?.profile.name} <span>{dayjs(comment?.created_at).fromNow()}</span></h3>
                    <p dangerouslySetInnerHTML={{ __html: comment?.body }} />
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>{comment?.stats?.num_likes ?? 0}</span></div>
                    <div className="wrap"><BiDislike /> <span>{comment?.stats?.num_dislikes ?? 0}</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>${comment?.stats?.total_hive_reward?.toFixed(2) ?? '0.00'}</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
            ))}

        </div>
  )
}

export default CommentSection