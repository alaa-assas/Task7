
'use client';

import ButtonCustom from "../shared/ButtonCustom";

const BookForm = () => {
 const formFields = [
    {
      id: 'name',
      label: 'Name and Surname',
      type: 'text',
      placeholder: 'Enter your name and surname',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
    },
    {
      id: 'telephone',
      label: 'Telephone Number',
      type: 'tel',
      placeholder: 'Enter your telephone number',
    },
    {
      id: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: [
        { value: '', label: 'Select the service types' },
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
        { value: 'type3', label: 'Type 3' },
      ],
    },
    {
      id: 'date',
      label: 'Date',
      type: 'date',
    },
    {
      id: 'time',
      label: 'Time',
      type: 'time',
    },
  ];

  return (
    <form className="bg-[#FFFFFF4D] p-8 rounded-3xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 " key={23}>
      {formFields.map((field, index) => {
         switch (field.type) {
            case 'select':
              return (
                <div key={index} className="col-span-1">
                  <label htmlFor="name" className="pb-2 block font-semibold text-sm md:text-lg text-secondary [line-height:100%]">
                    {field.label}
                  </label>
                  <select id={field.id}
                    className="block w-full px-6 py-3 text-secondary/50 bg-white rounded-lg focus:ring-primary focus:border-primary">
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </select>
                </div>
              )
          default:
          return (
            <div key={index} className="col-span-1">
              <label htmlFor="name" className="pb-2 block font-semibold text-sm md:text-lg text-secondary [line-height:100%]">
                 {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="block w-full px-6 py-3 text-secondary/50 bg-white rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
          )
        }
      })}
      
        {/* Book Now Button */}
        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <ButtonCustom type={undefined} label="Book Now" classBtnExtra="" />
        </div>
      </div>
    </form>
  );
};

export default BookForm;