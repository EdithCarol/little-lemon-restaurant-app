import React, { useState } from "react";
import "./BookingForm.css"; // Archivo CSS para estilos específicos del formulario

const BookingForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [submitted, setSubmitted] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (date && time && guests && occasion) {
      onSubmit({ date, time, guests, occasion });
      setSubmitted(true);
    } else {
      alert("Por favor, completa todos los campos antes de enviar.");
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Formulario de reserva"
    >
      <label htmlFor="res-date">Elige la fecha</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />
      <label htmlFor="res-time">Elige la hora</label>
      <select id="res-time" value={time} onChange={handleTimeChange} required>
        {availableTimes.map((timeOption, index) => (
          <option key={index}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Número de invitados</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />
      <label htmlFor="occasion">Ocasión</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option>Cumpleaños</option>
        <option>Aniversario</option>
      </select>
      <input type="submit" value="Haz tu reserva" />
      {submitted && (
        <p>
          ¡Gracias por tu reserva! Te contactaremos pronto con más detalles.
        </p>
      )}
    </form>
  );
};

export default BookingForm;
