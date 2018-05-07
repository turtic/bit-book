import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
import { Card, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//    EXPERIMENT   !!!!

class FeedImage extends Component {
    constructor(props) {
        super(props)
        this.state = { dimensions: {} };
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({ target: img }) {
        this.setState({
            dimensions: {
                height: img.offsetHeight,
                width: img.offsetWidth
            }
        });
    }
    componentDidMount(){
        console.log(this.state.dimensions);
    }

    render() {
        return
        (
            <Card>
                <Image as={Link} to={`/image/${this.props.post.id}`} style={{ width: "inherit" }} src={this.props.post.imageUrl} />
                <Card.Content extra>
                    <Modal style={{ marginTop: '100px', marginRight: "auto", marginBottom: "auto", marginLeft: "auto" }} trigger={<a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>}>
                        <Image size='large' onLoad={this.onImgLoad} style={{ margin: "auto", width: '100%' }} src={this.props.post.imageUrl} />
                    </Modal>
                    <a className='float-right'><i aria-hidden="true" className="comment icon"></i>{this.props.post.commentsNum} comments</a>
                </Card.Content>
            </Card>
        )
    }
}


export default FeedImage;