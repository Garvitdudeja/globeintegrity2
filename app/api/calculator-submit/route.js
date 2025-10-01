import axios from 'axios';

export async function POST(request) {
  try {
    const { data } = await request.json();
    console.log("Incoming calculator data:", data);

    // Map the data to the required Zoho fields
    const zohoPayload = {
      Date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      Date_of_Birth: data.form?.dateOfBirth || '',
      Gender: data.form?.gender || '',
      Zip_Code: data.form?.zipCode || '',
      Marital_Status: data.form?.maritalStatus || '',
      Children: data.form?.children || '',
      HouseHold_Income: data.form?.annualIncome || '',
      Debt: data.form?.debt || '',
      Existing_Coverage: data.form?.existingCoverage || '',
      Savings: data.form?.savings || '',
      Risk_Tolerance: data.form?.riskTolerance || '',
      Retirement_Savings: data.form?.retirementSavings || '',
      Years_Before_Cashout: data.form?.yearsBeforeCashOut || '',
      Google_Recaptcha: '', // Add recaptcha if needed
      First_Name: data.firstName || '',
      Last_Name: data.lastName || '',
      Email: data.email || '',
      Phone: data.phone || ''
    };

    console.log("Mapped payload for Zoho:", zohoPayload);

    // Prepare form-data object
    const formData = new FormData();
    formData.append('arguments', JSON.stringify(zohoPayload));

    const targetApiUrl = 'https://www.zohoapis.com/crm/v7/functions/add_calculator_leads/actions/execute' +
      '?auth_type=apikey&zapikey=1003.ea52eed87a0014942321fe35b0a9b557.2958e2de5bb055884936bb746b431c82';

    const response = await axios.post(targetApiUrl, formData, {
      headers: formData.getHeaders 
        ? formData.getHeaders() 
        : { 'Content-Type': 'multipart/form-data' }
    });

    console.log("Zoho API response:", response.data);

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error("Zoho Calculator API error:", err);
    return new Response(JSON.stringify({ 
      error: err.message,
      details: err.response?.data || null 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
