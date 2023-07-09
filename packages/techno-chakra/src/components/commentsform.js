import React from "react";
import { connect, styled } from "frontity";
import { 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  Text 
} from "@chakra-ui/react";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <LeaveComment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {/* {form?.isSubmitting && <Loading />} */}
        
        <Field>
            <FormLabel>
                Name:
            </FormLabel>
            <Input
                name="author_name"
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    authorName: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.authorName || ""}
            />
            {form?.errors?.authorName}
        </Field>
        
        <Field>
            <FormLabel>
                Email:
            </FormLabel>
            <Input
                name="author_email"
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    authorEmail: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.authorEmail || ""}
            />
            {form?.errors?.authorEmail}
        </Field>

        <FieldTextArea>
            <FormLabel>
                Content:
            </FormLabel>
            <Textarea
                name="content"
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    content: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.content || ""}
            />
            {/* Show the errors for the individual fields.
                E.g. content of a comment cannot be empty and the email must be valid */}
            {form?.errors?.content}
        </FieldTextArea>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

        {/* If the form was submitted successfully we can show a confirmation */}
        <div>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </div>
        
        <SubmitButton>
            <Button bg="#EE0300" mt={5} type="submit"><Text color="white">Submit</Text></Button>
        </SubmitButton>
      </form>
    </LeaveComment>
  );
};

export default connect(CommentsForm);

const LeaveComment = styled.div`
  width: 100%;
  & > p {
    margin: 0;
  }
`

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > input {
    width: 100%;
    border: 2px solid #EE0300;
    height: 30px;
    outline: 2px solid #FD05E9;
    outline-offset: 2px;
    color: #FFFFFF;
  }
  & > label {
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 15px;
  }
`

const FieldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > textarea {
    border: 2px solid #EE0300;
    height: 200px;
    outline: 2px solid #FD05E9;
    outline-offset: 2px;
    color: #FFFFFF;
  }
  & > label {
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 15px;
  }
`

const SubmitButton = styled.div`
  margin-top: 10px;
  button { 
    background: #EE0300;
    p {
      color: #FFFFFF;
    }
  }
  & > input {
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }
`
