import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) return 0;
    else if (num < 0) return people.length - 1;
    else return num;
  };
  const prevPerson = () => {
    const newIndex = index - 1;
    setIndex(() => {
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    const newIndex = index + 1;
    setIndex(() => {
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = newIndex + 1;
    }
    setIndex(() => {
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <div className="job">{job}</div>
      <div className="info">{text}</div>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Pick Any
      </button>
    </article>
  );
};

export default Review;
