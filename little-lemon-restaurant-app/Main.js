import React, { useState } from "react";
import BookingForm from "./BookingForm";

function Main() {
  // Estado para las franjas horarias disponibles
  const [availableTimes, setAvailableTimes] = useState([]);

  // Estado para almacenar todas las reservas realizadas
  const [bookings, setBookings] = useState([]);

  // Función para actualizar las franjas horarias disponibles en función de la fecha seleccionada
  const updateTimes = (newTimes) => {
    setAvailableTimes(newTimes);
  };

  // Función para manejar la adición de una nueva reserva
  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <main>
      <h2>¡Haz tu reserva ahora!</h2>
      <p>Selecciona una fecha y hora para reservar tu mesa en Little Lemon.</p>
      {/* Pasamos la función handleAddBooking al componente BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        onAddBooking={handleAddBooking} // Nuevo prop para manejar la adición de reservas
      />
      {/* Otros componentes y contenido principal */}
    </main>
  );
}

export default Main;
