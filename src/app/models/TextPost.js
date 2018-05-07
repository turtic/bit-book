export class Post {
    constructor(post) {
        this.commentsNum = post.commentsNum;
        this.dateCreated = post.dateCreated;
        this.id = post.id;
        this.type = post.type;
        this.userDisplayName = post.userDisplayName;
        this.userId = post.userId;
    }
}


export class PostVideo extends Post {
    constructor(post) {
        super(post);
        this.videoUrl = (() => {
            let videoLink = post.videoUrl;
            if (!videoLink.includes("embed")) {
                videoLink = videoLink.replace("watch?v=", "/embed/");
            }
            return videoLink
          })()
  }
}

  

export class PostText extends Post {
    constructor(post) {
        super(post);
        this.text = post.text;
      }
  }
export class PostImage extends Post {
    constructor(post) {
        super(post);
        this.imageUrl = post.imageUrl;
      }
  }