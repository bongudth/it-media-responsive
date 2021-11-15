import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./CreateQuestion.scss"
import avatar from "../../assets/images/avatar.jpg"

function CreateQuestion() {
  return (
    <>
      <Header />
      <div className="create-question-wrapper">
        <div className="create-question-container">
          <div className="create-question-header">
            CreateQuestion
          </div>
          <div className="question-item">
            <div className="item-label">
              <div>Topic</div>
              <div className="asterisk">*</div>
            </div>
            <div className="item-input">
              <select>
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
              </select>
              <div className="subtitle"></div>
            </div>
          </div>
          <div className="question-item">
            <div className="item-label">
              <div>Title</div>
              <div className="asterisk">*</div>
            </div>
            <div className="item-input">
              <input />
              <div className="subtitle"></div>
            </div>
          </div>
          <div className="question-item">
            <div className="item-label">
              <div>Image</div>
            </div>
            <div className="item-input">
              <input
                type="file"
                id="file-input"
                accept="image/x-png,image/gif,image/jpeg"
                hidden
              />
              <button type="button">
                SelectFile
              </button>
            </div>
          </div>

          <div className="description-item">
            <div className="item-label">
              <div>Description</div>
              <div className="asterisk">*</div>
            </div>
            <textarea></textarea>
          </div>
          <div className="create-question-footer">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateQuestion