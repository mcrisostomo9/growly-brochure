import React, { useContext } from "react"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import { Formik } from "formik"
import Button from "../Shared/Button"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"

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

const StyledMaterialSelect = styled(TextField)`
  .MuiFormLabel-root {
    color: var(--content-grey);

    &.Mui-focused {
      color: var(--dark-grey);
    }
  }

  .MuiInputBase-root {
    color: var(--dark-grey);

    &.MuiInput-underline:after {
      border-color: 2px solid var(--dark-grey);
    }
  }
`

const Email = styled(StyledMaterialSelect)`
  grid-area: email;
`

const Name = styled(StyledMaterialSelect)`
  grid-area: name;
`

const Company = styled(StyledMaterialSelect)`
  grid-area: company;
`

const Subscribers = styled(StyledMaterialSelect)`
  grid-area: subscribers;
`

const ServiceProvider = styled(StyledMaterialSelect)`
  grid-area: serviceProvider;
`

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

const serviceProviderArray = [
  "Active Campaign",
  "AWeber",
  "Campaign Monitor",
  "Constant Contact",
  "ConvertKit",
  "Drip",
  "Elastic",
  "Emma",
  "Keap",
  "Klaviyo",
  "MailerLite",
  "Mailchimp",
  "MailGun",
  "OmniSend",
  "Send Grid",
  "SendsinBlue",
  "Substack",
  "Not listed, other",
]

const RequestForm = ({ ref }) => {
  const { toggleRequestReceived } = useContext(Context)

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        subscribers: "500 - 2,000",
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
          body: encode({ "form-name": "growly-beta", ...values }),
        })
          .then(res => {
            console.log(res)
            if (res.status === 404) {
              actions.setStatus({
                errorMsg: "There was an error submitting the form.",
              })
              actions.setSubmitting(false)
            } else {
              actions.setSubmitting(false)
              toggleRequestReceived()
            }
          })
          .catch(err => {
            console.log(err)
            actions.setStatus({
              errorMsg: "There was an error submitting the form.",
            })
            actions.setSubmitting(false)
            console.log(err)
          })
      }}
      render={({
        values,
        handleChange,
        errors,
        touched,
        handleSubmit,
        status,
      }) => (
        <Form
          name="growly-beta"
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="growly-beta" />

          <Email
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email ? errors.email : ""}
          />

          <Name
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name ? errors.name : ""}
          />

          <Company
            id="company"
            name="company"
            label="Company"
            value={values.company}
            onChange={handleChange}
            error={touched.company && Boolean(errors.company)}
            helperText={touched.company ? errors.company : ""}
          />

          <Subscribers
            select
            label="Subscribers"
            name="subscribers"
            value={values.subscribers}
            onChange={handleChange}
          >
            <MenuItem value="500 - 2,000">500 - 2,000 subscribers</MenuItem>
            <MenuItem value="2,001 - 10,00">2,000 - 10,00 subscribers</MenuItem>
            <MenuItem value="10,001 - 50,000">
              10,001 - 50,000 subscribers
            </MenuItem>
            <MenuItem value="50,001 - 100,000">
              50,001 - 100,000 subscribers
            </MenuItem>
            <MenuItem value="100,001 - 250,000">
              100,001 - 250,000 subscribers
            </MenuItem>
            <MenuItem value="250,001 - 500,000">
              250,001 - 500,000 subscribers
            </MenuItem>
            <MenuItem value="500,000+">500,000+ subscribers</MenuItem>
          </Subscribers>
          <ServiceProvider
            select
            label="Service Provider"
            name="serviceProvider"
            value={values.serviceProvider}
            onChange={handleChange}
            error={touched.serviceProvider && Boolean(errors.serviceProvider)}
            helperText={touched.serviceProvider ? errors.serviceProvider : ""}
          >
            <MenuItem value="">Select email service provider</MenuItem>
            {serviceProviderArray.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </ServiceProvider>
          <StyledButton text="request beta access" type="submit" />
          {status && status.errorMsg && (
            <ErrorSubmission>{status.errorMsg}</ErrorSubmission>
          )}
        </Form>
      )}
    />
  )
}

export default RequestForm
