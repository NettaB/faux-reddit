
const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit'
};

export const dateFormatter = (timeStamp) => new Date(timeStamp).toLocaleDateString('en-US', dateOptions);

export const commentCounter = (comments) => comments.length || 'no';

export const noopFunc = () => {};

export const upvoteItem = (item) => {
  item.voteCount = item.isUpvoted ? item.voteCount - 1 : item.voteCount + 1;
  item.isUpvoted =!item.isUpvoted;
  return item
};

export const downvoteItem = (item) => {
  item.voteCount = item.isDownvoted ? item.voteCount + 1 : item.voteCount - 1;
  item.isDownvoted = !item.isDownvoted;
  return item;
};

export const createComment = (comment) => ({
    text: comment,
    timeStamp: new Date().getTime(),
    voteCount: 0,
    userName: 'NOT IMLEMENTED YET!!!',
    comments: []
  }
);
