import { Box, Button, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { createComment } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';

type Inputs = {
  content: string;
};

const errorMessages = {
  content: {
    required: 'Post Content is Required',
  },
};

export default function CreateCommentForm({
  postId,
  handleClose,
}: {
  postId: string;
  handleClose: () => void;
}) {
  const dispatch = useAppDispatch();

  // react-hook-form setup
  const { control, handleSubmit } = useForm<Inputs>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createComment({ postId: postId, newContent: data.content })).then(
      handleClose,
    );
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {/*   <textarea {...register('content', { required: true })} /> */}
      {/*   {errors.content && <li>This field is required</li>} */}
      {/*   <input type="submit" value="Create Comment" /> */}
      {/* </form> */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={
          {
            // mt: 1,
            // maxWidth: '95%',
            // width: '600px',
          }
        }
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
                label="Comment"
                rows={3}
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
        <Button type="submit" variant="contained">
          Create Comment
        </Button>
      </Box>
    </>
  );
}
