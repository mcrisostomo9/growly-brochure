import React from "react"
import styled from "styled-components"
import { ErrorMessage, Formik } from "formik"
import Button from "../Shared/Button"
import { mediaQuery } from "../../utils/styles"

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas: "email" "name" "company" "subscribers" "serviceProvider" "button";
  padding: 1rem;
  grid-gap: 1rem;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0;
  align-items: center;
  font-family: var(--body-font);

  @media (min-width: ${mediaQuery.m768}) {
    grid-template-areas: "email email" "name company" "subscribers serviceProvider" "button button";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem 5rem;
  }
`

const Label = styled.label`
  color: #2e2e2e;
  font-size: 1rem;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 1.5rem;
  }
`

const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 35px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0.5rem;
`

const Select = styled.select`
  width: 100%;
  height: 35px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #000;
  padding: 0.5rem;
  appearance: none;
  position: relative;

  :after {
    content: "▼";
    padding: 12px 8px;
    position: absolute;
    right: 10px;
    top: 0;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;
    pointer-events: none;
  }
`

const Email = styled.div`
  grid-area: email;
  display: flex;
  flex-direction: column;
`

const Name = styled(Email)`
  grid-area: name;
`

const Company = styled(Email)`
  grid-area: company;
`

const Subscribers = styled(Select)`
  grid-area: subscribers;
`

const ServiceProvider = styled(Select)`
  grid-area: serviceProvider;
`

const StyledButton = styled(Button)`
  grid-area: button;
  justify-self: center;
`

export const ErrorText = styled.div`
  color: #ff5555;
  margin-top: 0.5rem;
  font-family: var(--subheader-font);
  font-size: 1rem;
`

export const SuccessText = styled(ErrorText)`
  color: #9de061;
`

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RequestForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        subscribers: "",
        serviceProvider: "",
      }}
      validate={values => {
        let errors = {}
        // REGEX
        if (!values.email) {
          errors.email = "Forgot something? Add in your email."
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Try again, that’s not a valid email."
        }
        if (!values.name) {
          errors.name = "Forgot something? Add in your name."
        }
        if (!values.message) {
          errors.company = "Forgot something? Add a brief message"
        }
        if (values.dropdown === "Inquiry Type") {
          errors.dropdown = "Please select one of the options"
        }

        return errors
      }}
      // onSubmit={(values, actions) => {
      //   fetch("/", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     body: encode({ "form-name": "contact", ...values }),
      //   })
      //     .then(res => {
      //       console.log(res)
      //       actions.setStatus({
      //         success: "Success! We’ll talk soon.. real soon.",
      //       })
      //       actions.setSubmitting(false)
      //     })
      //     .catch(err => {
      //       actions.setStatus({
      //         errorMsg: "There was an error submitting the form.",
      //       })
      //       actions.setSubmitting(false)
      //       console.log(err)
      //     })
      // }}
      render={({ values, handleChange, handleSubmit, status }) => (
        <Form
          onSubmit={handleSubmit}
          name="beta request"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request" />

          <Email>
            <Label>Email</Label>
            <Input name="email" value={values.email} onChange={handleChange} />
            <ErrorMessage name="email" component={ErrorText} />
          </Email>

          <Name>
            <Label>Name</Label>
            <Input name="name" value={values.name} onChange={handleChange} />
            <ErrorMessage name="name" component={ErrorText} />
          </Name>

          <Company>
            <Label>Company</Label>
            <Input
              name="company"
              value={values.company}
              onChange={handleChange}
            />
            <ErrorMessage name="company" component={ErrorText} />
          </Company>
          <Subscribers
            name="subscribers"
            value={values.subscribers}
            onChange={handleChange}
          >
            <option defaultValue>1 - 1,000 subscibers</option>
            <option value="2000">1,001 - 2,000 subscibers</option>
            {/*{form_option.map(i => (*/}
            {/*  <option key={i.option.text} value={i.option.text}>*/}
            {/*    {i.option.text}*/}
            {/*  </option>*/}
            {/*))}*/}
          </Subscribers>
          <ServiceProvider
            name="serviceProvider"
            value={values.serviceProvider}
            onChange={handleChange}
          >
            <option defaultValue>Select email service provider</option>
            <option value="mailchimp">Mailchimp</option>
            <option value="klaviyo">Klaviyo</option>
            {/*{form_option.map(i => (*/}
            {/*  <option key={i.option.text} value={i.option.text}>*/}
            {/*    {i.option.text}*/}
            {/*  </option>*/}
            {/*))}*/}
          </ServiceProvider>
          <StyledButton text="request beta access" />

          {status && <div>{status.success}</div>}
          {status && status.errorMsg && <div>{status.errorMsg}</div>}
        </Form>
      )}
    />
  )
}

export default RequestForm
