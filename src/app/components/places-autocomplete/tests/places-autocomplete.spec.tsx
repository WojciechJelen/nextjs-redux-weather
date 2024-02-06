// places-autocomplete.test.tsx
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { PlacesAutocomplete } from "../places-autocomplete";

jest.mock("use-places-autocomplete", () => {
  return {
    __esModule: true,
    default: jest.fn(),
    getGeocode: jest.fn(),
  };
});

jest.mock("react-cool-onclickoutside", () => jest.fn(() => jest.fn()));

describe("PlacesAutocomplete", () => {
  beforeEach(() => {
    (usePlacesAutocomplete as jest.Mock).mockReturnValue({
      ready: true,
      value: "",
      suggestions: { status: "", data: [] },
      setValue: jest.fn(),
      clearSuggestions: jest.fn(),
    });
    (getGeocode as jest.Mock).mockResolvedValue([]);
  });

  it("renders input element correctly", () => {
    const { getByPlaceholderText } = render(
      <PlacesAutocomplete onLocationSelect={() => {}} />
    );
    expect(
      getByPlaceholderText("What is the weather in...?")
    ).toBeInTheDocument();
  });

  it("input change updates value", () => {
    const setValueMock = jest.fn();
    (usePlacesAutocomplete as jest.Mock).mockReturnValue({
      ready: true,
      value: "",
      suggestions: { status: "", data: [] },
      setValue: setValueMock,
      clearSuggestions: jest.fn(),
    });

    const { getByPlaceholderText } = render(
      <PlacesAutocomplete onLocationSelect={() => {}} />
    );
    const input = getByPlaceholderText("What is the weather in...?");
    fireEvent.change(input, { target: { value: "New York" } });

    expect(setValueMock).toHaveBeenCalledWith("New York");
  });

  it("selecting a suggestion calls onLocationSelect with results", async () => {
    const suggestionsData = [
      {
        place_id: "1",
        structured_formatting: { main_text: "New York", secondary_text: "NY" },
      },
    ];
    const geocodeResults = ["Geocode Result"];
    const onLocationSelectMock = jest.fn();

    (usePlacesAutocomplete as jest.Mock).mockReturnValue({
      ready: true,
      value: "New York",
      suggestions: { status: "OK", data: suggestionsData },
      setValue: jest.fn(),
      clearSuggestions: jest.fn(),
    });
    (getGeocode as jest.Mock).mockResolvedValue(geocodeResults);

    const { getByText } = render(
      <PlacesAutocomplete onLocationSelect={onLocationSelectMock} />
    );
    const suggestion = getByText("New York");
    fireEvent.click(suggestion);

    await waitFor(() =>
      expect(onLocationSelectMock).toHaveBeenCalledWith(geocodeResults)
    );
  });

  it("displays error message on geocode failure", async () => {
    const error = new Error("Geocoding failed");
    (getGeocode as jest.Mock).mockRejectedValue(error);
    (usePlacesAutocomplete as jest.Mock).mockReturnValue({
      ready: true,
      value: "Error City",
      suggestions: {
        status: "OK",
        data: [
          {
            place_id: "2",
            structured_formatting: {
              main_text: "Error City",
              secondary_text: "",
            },
          },
        ],
      },
      setValue: jest.fn(),
      clearSuggestions: jest.fn(),
    });

    const { getByText } = render(
      <PlacesAutocomplete onLocationSelect={() => {}} />
    );
    const suggestion = getByText("Error City");
    fireEvent.click(suggestion);

    await waitFor(() => expect(getByText(error.message)).toBeInTheDocument());
  });

  it("input is disabled when component is not ready or is disabled", () => {
    const { getByPlaceholderText } = render(
      <PlacesAutocomplete
        onLocationSelect={() => {}}
        disabled={true}
        disabledText="Search is disabled"
      />
    );
    const input = getByPlaceholderText("Search is disabled");
    expect(input).toBeDisabled();
  });
});
