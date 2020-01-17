import React, { useContext } from "react"
import styled from "styled-components"
import { ErrorMessage, Formik } from "formik"
import Button from "../Shared/Button"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"
import arrow from "../../images/arrow.svg"

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas: "email" "name" "company" "subscribers" "serviceProvider" "button";
  padding: 1rem;
  grid-gap: 2rem 5rem;
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
  border-bottom: 1px solid #000;
  border-radius: 0;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  appearance: none;
  background: transparent url(${arrow}) no-repeat right;
`

const Email = styled.div`
  grid-area: email;
  display: flex;
  flex-direction: column;
  position: relative;
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

const ServiceProviderContainer = styled.div`
  grid-area: serviceProvider;
  position: relative;
`

const ServiceProvider = styled(Select)``

const StyledButton = styled(Button)`
  grid-area: button;
  justify-self: center;
`

const ErrorText = styled.div`
  color: #ff5555;
  font-size: 1rem;
  position: absolute;
  bottom: -1.5rem;
`

const ErrorProvider = styled(ErrorText)`
  bottom: -2.5rem;
`

const ErrorSubmission = styled(ErrorText)`
  text-align: center;
  margin: 0;
  grid-column: span 2;
  position: relative;
`

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RequestForm = () => {
  const { toggleRequestReceived } = useContext(Context)

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        subscribers: "1 - 1,000",
        serviceProvider: "",
      }}
      validate={values => {
        let errors = {}
        // REGEX
        if (!values.email) {
          errors.email = "Please add in your email."
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Please enter a valid email."
        }
        if (!values.name) {
          errors.name = "Please add in your name."
        }
        if (!values.company) {
          errors.company = "Please add in your company."
        }
        if (!values.serviceProvider) {
          errors.serviceProvider = "Please select your email service provider."
        }

        return errors
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "beta-request", ...values }),
        })
          .then(res => {
            actions.setSubmitting(false)
            toggleRequestReceived()
          })
          .catch(err => {
            actions.setStatus({
              errorMsg: "There was an error submitting the form.",
            })
            actions.setSubmitting(false)
            console.log(err)
          })
      }}
      render={({ values, handleChange, handleSubmit, status }) => (
        <Form
          onSubmit={handleSubmit}
          name="beta-request"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="beta-request" />

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
            <option defaultValue>1 - 1,000 subscribers</option>
            <option value="2000">1,001 - 2,000 subscribers</option>
          </Subscribers>
          <ServiceProviderContainer>
            <ServiceProvider
              name="serviceProvider"
              value={values.serviceProvider}
              onChange={handleChange}
            >
              <option defaultValue>Select email service provider</option>
              <option value="mailchimp">Mailchimp</option>
              <option value="klaviyo">Klaviyo</option>
            </ServiceProvider>
            <ErrorMessage name="serviceProvider" component={ErrorProvider} />
          </ServiceProviderContainer>
          <StyledButton text="request beta access" type="submit" />
          {status && status.errorMsg && <ErrorSubmission>ff</ErrorSubmission>}
        </Form>
      )}
    />
  )
}

export default RequestForm
