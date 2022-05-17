import React from "react";
import Form from "../../components/form/Form";
import TheButton from "../../components/button/TheButton";

import "../edit-form/editForm.scss";

const EditForm = () => {
  return (
    <div className="edit-form">
      <div className="edit-header-but">
        <h1>Edit article</h1>
        <TheButton value="Publish Article" />
      </div>
      <Form />
    </div>
  );
};

export default EditForm;
