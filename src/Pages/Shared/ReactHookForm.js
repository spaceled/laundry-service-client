import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ReactHookForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className="text-3xl font-bold uppercase text-center">order form</h2>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </div>
  );
};

export default ReactHookForm;