
import { UserData } from "../models/data.model";

export const validateFormData = (formData: UserData) => {
    const errors: Record<string, string> = {};
    
    // Validate first name (only letters)
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = "First name should contain only letters.";
    }
  
    // Validate last name (only letters)
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = "Last name should contain only letters.";
    }
  
    // Validate phone number (numeric and 10 digits)
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
  
    // Validate password (one uppercase, one lowercase, one special character, and at least 6 characters long)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(formData.password)) {
      errors.password = "Choose a strong password.";
    }
  
    return errors;
  };
  