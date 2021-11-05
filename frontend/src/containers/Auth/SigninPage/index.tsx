import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAppDispatch } from "store/hooks";
import { signin } from "store/modules/trello";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

const initialValues = {
  email: "",
};

const SigninPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(signin(values)).then(() => {
        history.push("/");
      });
      actions.resetForm({ values: initialValues });
    },
  });

  return (
    <Row>
      <Col md={6} className="mx-auto mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Sign in</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Please input your credentials.
            </Card.Subtitle>
            <Form className="form" onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="example@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </Form.Group>
              <Button type="submit" color="primary" className="w-100">
                Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SigninPage;
