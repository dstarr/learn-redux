import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class EditPersonModal extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}