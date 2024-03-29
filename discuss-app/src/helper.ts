const path = {
  homePath: () => {
    return "/";
  },
  topicShowPath: (slug: string) => {
    return `/topics/${slug}`;
  },
  createPostPath: (slug: string) => {
    return `/topics/${slug}/posts/new`;
  },
  showPostPath: (slug: string, postId: string) => {
    return `/topics/${slug}/posts/${postId}`;
  },
};

export default path;
