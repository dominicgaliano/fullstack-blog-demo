import CommentType from '../types/CommentType';

export default function CommentCard({ comment }: { comment: CommentType }) {
  return (
    <div>
      {comment.author.email}
      {comment.text}
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  );
}
