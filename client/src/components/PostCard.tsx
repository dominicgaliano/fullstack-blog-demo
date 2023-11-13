import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { deletePost, updatePost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import CommentType from '../types/CommentType';
import Post from '../types/Post.d';
import CommentCard from './CommentCard';
import CreateCommentForm from './CreateCommentForm';

type Input = {
  content: string;
};

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  // form utilities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ defaultValues: { content: post.content } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    const postChanges = { id: post._id, newContent: data.content };
    setIsEditing(false);
    dispatch(updatePost(postChanges));
  };

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCreatingComment, setIsCreatingComment] = useState<boolean>(false);

  // MoreVert dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.author.email.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-label="settings"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.author.email}
        subheader={post.timestamp.toString()}
      />
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
            handleClose();
            setIsEditing(true);
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Update</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            if (window.confirm('Are you sure to delete this post?')) {
              dispatch(deletePost(post._id));
            }
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
      <CardContent>
        {isEditing ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="content">Update Post:</label>
              <textarea
                {...register('content', { required: true })}
                placeholder="Post Content"
              />
              {errors.content && <li>This field is required</li>}
              <input type="submit" value="Save Changes" />
            </form>
            <button
              onClick={() => {
                setIsEditing(false);
              }}
            >
              cancel
            </button>
          </>
        ) : (
          <p>{post.content}</p>
        )}
        <Box display="flex" alignItems="center">
          <Typography>{post.likes}</Typography>
          <IconButton onClick={() => alert('not implemented')}>
            <ThumbUpIcon />
          </IconButton>
        </Box>

        <span>Comments:</span>
        {post.comments &&
          post.comments.map((comment: CommentType) => (
            <CommentCard key={comment._id} postId={post._id} comment={comment} />
          ))}
        {isCreatingComment && (
          <CreateCommentForm
            postId={post._id}
            handleClose={() => setIsCreatingComment(false)}
          />
        )}
        <Button onClick={() => setIsCreatingComment(!isCreatingComment)}>
          {isCreatingComment ? 'cancel' : 'create comment'}
        </Button>
      </CardContent>
    </Card>
  );
}
