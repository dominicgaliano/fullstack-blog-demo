import CommentType from '../types/CommentType';

export default function CommentCard({ comment }: { comment: CommentType }) {
  return (
    <>
      {comment.author.email}: {comment.text}
    </>
  );
}
