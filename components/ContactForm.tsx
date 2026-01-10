import Input from './Input';
import Select from './Select';
import { AppButton } from './AppButton';
import { Users } from 'lucide-react';


const ContactForm = () => {
  const options = [
    { label: 'Risk Assessment', value: 'risk' },
    { label: 'Data Integration', value: 'data' },
    { label: 'Asset Protection', value: 'asset' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <div 
      className="flex flex-col w-full h-full" 
    >

      {/* Form Fields Container */}
      <form className="flex flex-col items-end gap-8 w-full">
        
        {/* Row 1: Split Inputs */}
        <div className="flex flex-col lg:flex-row md:flex-row items-start gap-4 w-full">
          <div className="flex-1 w-full">
            <Input 
              label="Name" 
              placeholder="Input your full name" 
              className="w-full"
              required
            />
          </div>
          <div className="flex-1 w-full">
            <Input 
              label="Company" 
              placeholder="Company Name" 
              italicPlaceholder={true}
              className="w-full"
              required
            />
          </div>
        </div>

        {/* Row 2: Split Inputs */}
        {/* <div className="flex flex-row items-start gap-4 w-full">
         <div className="flex-1">
            <Input 
              label="Email" 
              placeholder="example@email.com" 
              className="w-full"
              required
            />
          </div>
          <div className="flex-1">
            <Input 
              label="Phone" 
              placeholder="+60 123456789" 
              className="w-full"
              required
            />
          </div>
        </div> */}

        {/* Row 3: Full Width Select */}
        <div className="w-full">
          <Select 
            label="Business Type" 
            placeholder="Select a Business Type" 
            options={options}
            className="w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <AppButton
          leftIcon={<Users size={24}/>}
          className="text-body text-sm lg:text-base w-full md:w-fit"
        >
          Contact Enterprise Sales
        </AppButton>
      </form>
    </div>
  );
};

export default ContactForm;