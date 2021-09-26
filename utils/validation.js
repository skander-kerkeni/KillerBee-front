let required = (propertyType, customErrorMessage) => { 
    return v => v && v.length > 0 || customErrorMessage || `You must input a ${propertyType}`
  }
  let minLength = (propertyType, minLength) => {
    return v => {
      if(!v){ return true; }
  
      return v.length >= minLength || `${propertyType} must be at least ${minLength} characters`;
    }
  }
  let maxLength = (propertyType, maxLength) => {
    return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
  }
  

  
  export default {
    required,
    minLength,
    maxLength,
    
  }