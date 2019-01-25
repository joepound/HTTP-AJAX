import React from "react";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const NewFriendForm = props => {
  const FormField = styled.div`
    margin-bottom: 20px;

    label {
      font-size: 1.6rem;
    }
  `;

  const FormTextField = styled(FormField)`
    input {
      ${StyleMixins.FormInputs.makeFormTextField()}
    }
  `;

  const FormNumberField = styled(FormField)`
    input {
      ${StyleMixins.FormInputs.makeFormNumberField()}
    }
  `;

  const FormButtons = styled.div`
    margin-top: 50px;

    button {
      ${StyleMixins.FormInputs.makeFormButton(
        StyleVars.Colors.Form.Button.bgColor,
        StyleVars.Colors.Form.Button.fontColor,
        StyleVars.Colors.Form.Button.borderColor
      )}

      display: block;
      cursor: pointer;
    }
  `;

  const firstname = props.newFirstName;

  return (
    // Used id attributes to match labels and meet accessibility standards
    <form name="newFriendForm" onSubmit={props.handleSubmit}>
      <FormTextField>
        <label htmlFor="add-friend-name">First Name</label>
        <input
          id="newFirstName"
          type="text"
          placeholder="Enter your first name"
          required
        />
      </FormTextField>
      <FormTextField>
        <label htmlFor="add-friend-name">Last Name</label>
        <input
          id="newLastName"
          type="text"
          placeholder="Enter your first name"
          required
        />
      </FormTextField>
      <FormTextField>
        <label htmlFor="add-friend-name">Email Address</label>
        <input
          id="newEmail"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </FormTextField>
      <FormNumberField>
        <label htmlFor="add-friend-name">Age:</label>
        <input
          id="newAge"
          type="number"
          min="0"
          placeholder="Age"
          required
        />
      </FormNumberField>
      <FormButtons>
        <button type="submit">Submit</button>
        <button type="button">Clear</button>
      </FormButtons>
    </form>
  );
};

export default NewFriendForm;
