import Form, { Field } from "rc-field-form";

import React from "react";
import { FC } from "react";

export const Bug: FC = () => (
  <>
  <p>
    The following rc-field-form is set up with an <code>action</code> and <code>method</code> property. The expected behaviour
    is that the form data is submitted to the endpoint mentioned in <code>action</code>. But it doesn't do that, because rc-field-form <a href="https://github.com/react-component/field-form/blob/04b1667b32013338ad32c09895a5b84714c5d589/src/Form.tsx#L164-L165">prevents event propagation</a>.
  </p>
    <Form name="test-form" action="https://httpstat.us/200" method="post">
      <Field name="test-field">
        <input placeholder="test field" value={""}/>
      </Field>
      <button type="submit" value={"submit"}>
        Submit
      </button>
    </Form>
  </>
);
