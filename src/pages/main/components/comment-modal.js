import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';

const CommentModal = (props) => {
  let commentText;

  const handleInput = (e) => {
    commentText = e.target.value;
  };
  const saveComment = () => {
    props.onHide(commentText)
  };

  const close = () => {
    props.onHide();
  };

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Add Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup>
          <FormControl componentClass="textarea" label='Add comment' onChange={handleInput}/>
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveComment}>Save</Button>
        <Button onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
};
export default CommentModal
