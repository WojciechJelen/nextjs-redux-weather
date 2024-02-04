import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import styles from "./places-autocomplete.module.scss";

type PropsType = {
  onLocationSelect: (results: google.maps.GeocoderResult[]) => void;
};

export const PlacesAutocomplete = ({ onLocationSelect }: PropsType) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        onLocationSelect(results);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className={styles.selectListItem}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className={styles.inputWrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="What is the weather in...?"
      />
      {status === "OK" && (
        <ul className={styles.selectList}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
