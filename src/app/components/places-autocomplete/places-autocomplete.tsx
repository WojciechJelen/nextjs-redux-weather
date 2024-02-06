import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import clsx from "clsx";
import { useState } from "react";
import styles from "./places-autocomplete.module.scss";

type PropsType = {
  onLocationSelect: (results: google.maps.GeocoderResult[]) => void;
  disabled?: boolean;
  disabledText?: string;
};

export const PlacesAutocomplete = ({
  onLocationSelect,
  disabled,
  disabledText = "Search is disabled",
}: PropsType) => {
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
  const [error, setError] = useState<Error | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description })
        .then((results) => {
          onLocationSelect(results);
        })
        .catch((error) => {
          setError(error as unknown as Error);
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

  const classNames = clsx(styles.input, {
    [styles.disabled]: disabled,
  });

  return (
    <div ref={ref} className={styles.inputWrapper}>
      <input
        className={classNames}
        value={value}
        onChange={handleInput}
        disabled={!ready || disabled}
        placeholder={disabled ? disabledText : "What is the weather in...?"}
      />
      {error && <p className={styles.error}>{error.message}</p>}
      {status === "OK" && (
        <ul className={styles.selectList}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
