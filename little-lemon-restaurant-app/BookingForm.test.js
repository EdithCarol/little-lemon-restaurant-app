import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Formulario de reserva", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("Prueba de almacenamiento local para el formulario de reserva", async () => {
    render(<BookingForm />);

    const { getByLabelText } = screen;

    fireEvent.change(getByLabelText("Choose date"), {
      target: { value: "2024-03-01" },
    });
    fireEvent.change(getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(getByLabelText("Number of guests"), {
      target: { value: "2" },
    });
    fireEvent.change(getByLabelText("Select occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(getByLabelText("Submit reservation"));

    await waitFor(() => {
      const savedBookingData = JSON.parse(localStorage.getItem("bookingData"));
      expect(savedBookingData[0].date).toBe("2024-03-01");
      expect(savedBookingData[0].time).toBe("18:00");
      expect(savedBookingData[0].guests).toBe("2");
      expect(savedBookingData[0].occasion).toBe("Birthday");
    });
  });

  // Otras pruebas relacionadas con el formulario aquí...
});
