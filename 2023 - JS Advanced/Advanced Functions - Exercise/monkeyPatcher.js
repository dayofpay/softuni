function solution() {
  const obfuscationThreshold = 50;
  const obfuscationFactor = 0.25;
  const ratingMajorityThreshold = 0.66;
  const ratingVoteThreshold = 100;
  const ratingNewThreshold = 10;


  function obfuscateVotes(count) {
    const obfuscationValue = Math.ceil(count * obfuscationFactor);
    return count + obfuscationValue;
  }


  function calculateRating() {
    const totalVotes = this.upvotes + this.downvotes;
    const voteBalance = this.upvotes - this.downvotes;
    const positiveRatio = this.upvotes / totalVotes;

    if (totalVotes < ratingNewThreshold) {
      return 'new';
    } else if (positiveRatio > ratingMajorityThreshold) {
      return 'hot';
    } else if (totalVotes >= ratingVoteThreshold && voteBalance >= 0) {
      return 'controversial';
    } else if (totalVotes >= ratingVoteThreshold && voteBalance < 0) {
      return 'unpopular';
    } else {
      return 'new';
    }
  }

  return function (command) {
    if (command === 'upvote') {
      this.upvotes++;
    } else if (command === 'downvote') {
      this.downvotes++;
    } else if (command === 'score') {
      const upvotes = this.upvotes;
      const downvotes = this.downvotes;
      const totalVotes = upvotes + downvotes;
      const voteBalance = upvotes - downvotes;

      let reportedUpvotes = upvotes;
      let reportedDownvotes = downvotes;

      if (totalVotes > obfuscationThreshold) {
        const obfuscationValue = Math.ceil(totalVotes * obfuscationFactor);
        reportedUpvotes = obfuscateVotes(upvotes);
        reportedDownvotes = obfuscateVotes(downvotes);
      }

      const rating = calculateRating.call(this);

      return [reportedUpvotes, reportedDownvotes, voteBalance, rating];
    }
  };
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']