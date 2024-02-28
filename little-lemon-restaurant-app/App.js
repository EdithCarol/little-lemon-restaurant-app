import React from "react";
import { useForm } from "react-hook-form";

const FormField = ({ label, id, register, type = "text", options }) => (
  <>
    <label htmlFor={id}>{label}</label>
    {type === "select" ? (
      <select id={id} {...register(id)}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    ) : (
      <input type={type} id={id} {...register(id)} />
    )}
  </>
);

const BookingForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const occasions = ["Birthday", "Anniversary"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <FormField
        label="Choose date"
        id="date"
        type="date"
        register={register}
      />
      <FormField
        label="Choose time"
        id="time"
        type="select"
        options={availableTimes}
        register={register}
      />
      <FormField
        label="Number of guests"
        id="guests"
        type="number"
        register={register}
      />
      <FormField
        label="Occasion"
        id="occasion"
        type="select"
        options={occasions}
        register={register}
      />
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
