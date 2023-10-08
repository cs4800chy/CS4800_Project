import React, { useState } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';

const AddressForm = () => {
  const methods = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Send confirmation email here using an email service or backend API
      // You need to implement this part based on your server setup.
      // For example, you can use a library like Nodemailer for Node.js to send emails.
      // In a real-world scenario, you would also need to handle errors and display messages to the user.
      
      // After sending the confirmation email, you can display a success message to the user.
      alert('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending confirmation email', error);
      alert('Failed to send confirmation email');
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Have your Code Sent
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email Address" />
            <FormInput required name="cEmail" label="Confirm Email" />
            <Button type="submit" variant="contained" color="primary">
              Send Confirmation Email
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;