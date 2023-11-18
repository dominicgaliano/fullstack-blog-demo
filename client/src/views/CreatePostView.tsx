import CreateIcon from '@mui/icons-material/Create';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Collapse,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import SpinLoader from '../components/SpinLoader';
import Post from '../types/Post';

type Inputs = {
  content: string;
};

const errorMessages = {
  content: {
    required: 'Post Content is Required',
    pattern: 'Invalid Email Address',
  },
};
export default function CreatePostView() {
  // redux utilities
  const { loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  // react-router utilities
  const navigate = useNavigate();

  // react-hook-form setup
  const { control, handleSubmit } = useForm<Inputs>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createPost(data.content)).then((res) => {
      const newPost: Post = res.payload;
      navigate(`../feed/${newPost._id}`);
    });
  };

  return (
    <>
      {loading ? (
        <SpinLoader />
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Post
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              mt: 1,
              maxWidth: '95%',
              width: '600px',
            }}
          >
            <Controller
              control={control}
              name="content"
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    type="text"
                    label="Post Content"
                    placeholder="Type your post content here"
                    rows={5}
                    fullWidth
                    multiline
                    error={error !== undefined}
                    // TODO: Fix this ts error
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    helperText={error ? errorMessages.content[error.type] : ''}
                  />
                );
              }}
            />
            <Collapse in={error != null}>
              <Alert severity="error">{error}</Alert>
            </Collapse>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Create Post
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
