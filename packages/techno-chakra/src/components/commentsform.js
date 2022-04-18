import React from "react";
import { connect, styled } from "frontity";

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
            <label>
                Name:
            </label>
            <input
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
            <label>
                Email:
            </label>
            <input
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
            <label>
                Content:
            </label>
            <textarea
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
            <input type="submit" />
        </SubmitButton>
      </form>
    </LeaveComment>
  );
};

export default connect(CommentsForm);

const LeaveComment = styled.div`
width: 500px;
  margin-top: 50px;
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
    border: 2px solid #AD9044;
    height: 30px;
  }
  & > label {
    font-size: 18px;
    color: #AD9044;
    margin-bottom: 15px;
  }
`

const FieldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > textarea {
    border: 2px solid #AD9044;
    height: 100px;
  }
  & > label {
    font-size: 18px;
    color: #AD9044;
    margin-bottom: 15px;
  }
`

const SubmitButton = styled.div`
  margin-top: 30px;
  & > input {
    background-color: #AD9044;
    color: #FFFFFF;
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }
`