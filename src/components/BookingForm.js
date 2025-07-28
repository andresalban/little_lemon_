import { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    //props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            {/* times selection */}
            <div>
              <label htmlFor="book-time">Choose time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.avialableTimes.avialableTimes.map((avialableTimes) => {
                  return <option key={avialableTimes}>{avialableTimes}</option>;
                })}
              </select>
            </div>

            {/* Guests Selection */}
            <div>
              <label htmlFor="book-guests">Number of Guest:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              ></input>
            </div>

            {/* Occasion field */}

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            {/* button submit*/}
                <div className="btnReceive">
                    <input aria-label="On Click" type="submit" value={"Make your Reservation"}/>
                </div>

          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
