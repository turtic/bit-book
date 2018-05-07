import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
// import SampleVideo_1280x720_1mb from '../../imports/video/SampleVideo_1280x720_1mb.mp4'



const FeedVideo= (props) => {

    let videoLink = props.post.videoUrl;
    if (!videoLink.includes("embed")) {
        videoLink = videoLink.replace("watch?v=", "/embed/");
    }


    return (
        <Card as={Link} to={`/video/${props.post.id}`}>
            <iframe title={videoLink} src={videoLink}>
            </iframe>
            <Card.Content extra>
                <p className='float-left'><i aria-hidden="true" className="video icon"></i>Video post</p>
                <p className='float-right'><i aria-hidden="true" className="comment icon"></i>{props.post.commentsNum} comments</p>
            </Card.Content>
        </Card>
    )

}


export default FeedVideo;

