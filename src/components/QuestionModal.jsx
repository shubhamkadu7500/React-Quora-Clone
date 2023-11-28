import React, { useState } from "react";
import "../css/questionmodal.css";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { Modal } from "react-responsive-modal";

const QuestionModal = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

   // Function to open the modal and set the active tab to "Add Question"
  const onOpenModal = () => {
    setOpen(true);
    setActiveTab("tab1"); // Show 'Add Question' content when the modal opens
  };

  const onCloseModal = () => setOpen(false);

   // Function to handle tab button clicks and switch between "Add Question" and "Create Post" content
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <button onClick={onOpenModal} className="header-question">
        <span>Add Question</span>
        <RxCaretDown className="caret" />
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
          overlayAnimationIn: "customEnterOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
        }}
      >
        <div className="modal">
          <div className="modal-titles">
            <div className={`modal-title ${activeTab === "tab1" ? "active" : ""}`}>
              <button onClick={() => handleTabClick("tab1")}>
                Add Question
              </button>
            </div>
            <div className={`modal-title ${activeTab === "tab2" ? "active" : ""}`}>
              <button onClick={() => handleTabClick("tab2")}>
                Create Post
              </button>
            </div>
          </div>
        </div>

        {activeTab === "tab1" && (
          <section>
            <div className="question-area">
              <div className="question-tips">
                <h6>Tips on getting good answer quickly</h6>
                <li>
                  <span>
                    Make sure your question has not been asked already
                  </span>
                </li>
                <li>
                  <span>Keep you question short and to the point</span>
                </li>
                <li>
                  <span>Double check grammer and spelling</span>
                </li>
              </div>
            </div>

            <div className="modal-user">
              <img src="" alt="image" />
              <BiSolidRightArrow className="rightarrow" />
              <div className="public">
                <FiUsers className="users" />
                <span>Public</span>
                <RxCaretDown className="rxcaret" />
              </div>
            </div>

            <div className="modal-textarea">
              <input
                type="text"
                placeholder="Start your question with What, why, How, etc"
              />
            </div>

            <div className="add-question">
              <span onClick={() => onCloseModal(false)}>Cancel</span>
              <button className="btn btn-primary">Add question</button>
            </div>
          </section>
        )}

        {activeTab === "tab2" && (
          <section>
            <div className="create-post">
              <div className="createpost-author">
                <div className="author-image">
                  <img src="/images/google-icon.svg" alt="" />
                </div>
                <div className="author-name">
                  <h4>Your name</h4>
                  <div className="choose">
                    <span>choose credentials</span>
                    <RxCaretRight className="c-right" />
                  </div>
                </div>
              </div>

              <div className="write">
                <input type="text" placeholder="Say something ...." />
              </div>

              <div className="post">
                <div className="post-icons">
                  <span>Aa</span>
                  <MdOutlinePhotoLibrary className="gal"/>
                </div>
                <button>Post</button>
              </div>
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
};

export default QuestionModal;
