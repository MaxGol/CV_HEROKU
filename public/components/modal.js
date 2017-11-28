import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Send Email</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea type="text" className="form-control" id="message" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-success" data-dismiss="modal">Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
