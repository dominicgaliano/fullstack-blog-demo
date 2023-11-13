import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { CSSProperties, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { deleteComment, updateComment } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import CommentType from '../types/CommentType';

type Input = {
  content: string;
};

export default function CommentCard({
  postId,
  comment,
}: {
  postId: string;
  comment: CommentType;
}) {
  const [style, setStyle] = useState({ display: 'none' });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteComment({ postId: postId, commentId: comment._id }));
  };

  const handleUpdate = () => {
    alert('not implemented');
  };

  // form utilities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ defaultValues: { content: comment.text } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    const commentChanges = {
      postId: postId,
      commentId: comment._id,
      newContent: data.content,
    };
    setIsEditing(false);
    dispatch(updateComment(commentChanges));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      onMouseEnter={() => {
        setStyle({ display: 'block' });
      }}
      onMouseLeave={() => {
        setStyle({ display: 'none' });
      }}
    >
      <div>
        {comment.author.email}: {comment.text}
      </div>
      <CommentMenu
        style={style}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </Box>
  );
  // return (
  //   <Box>
  //     {comment.author.email}:{' '}
  //     {isEditing ? (
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <label htmlFor="content">Update Post:</label>
  //         <textarea
  //           {...register('content', { required: true })}
  //           placeholder="Post Content"
  //         />
  //         {errors.content && <li>This field is required</li>}
  //         <input type="submit" value="Save Changes" />
  //       </form>
  //     ) : (
  //       comment.text
  //     )}
  //     <button onClick={() => setIsEditing(!isEditing)}>
  //       {isEditing ? 'cancel' : 'edit'}
  //     </button>
  //     <button
  //       onClick={() =>
  //         dispatch(deleteComment({ postId: postId, commentId: comment._id }))
  //       }
  //     >
  //       DELETE
  //     </button>
  //   </Box>
  // );
}

type CommentMenuProps = {
  style: CSSProperties;
  handleDelete: () => void;
  handleUpdate: () => void;
};

function CommentMenu({ style, handleDelete, handleUpdate }: CommentMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-label="settings"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={style}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleUpdate();
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Update</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDelete();
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
