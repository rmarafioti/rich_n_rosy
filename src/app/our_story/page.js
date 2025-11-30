"use client";

import { ourStory } from "../data/outStory";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import { our_story_background } from "../data/photos";
import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";

import styles from "../styling/our_story.module.css";

function StoryCard({ date, text, dateTwo, textTwo, cardId }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  const nextStopId = cardId + 1;
  const nextStopData = ourStory.find((card) => card.id === nextStopId);
  const notLastCard = cardId != 8;
  const lastCard = cardId === 8;

  return (
    <div
      ref={ref}
      className={`${styles.story_card} ${styles[`card_${cardId}`]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <p className={styles.date}>{date}:</p>
      <p>{text}</p>
      {notLastCard && (
        <section className={styles.scroll_section}>
          <p className={styles.next_stop}>Next stop: </p>
          <div className={styles.next_stop_date}>
            <p className={styles.next_date}>{nextStopData?.date}</p>
            <FaCircleArrowDown className={styles.scroll_icon} />
          </div>
        </section>
      )}
      {lastCard && (
        <section>
          <div className={styles.last_stop_section}>
            <p className={styles.last_stop}>Next stop:</p>
            <p className={styles.date_two}>{dateTwo}!</p>
          </div>
          <p>{textTwo}</p>
        </section>
      )}
    </div>
  );
}

export default function Our_Story() {
  const ourStoryBackground = our_story_background;

  return (
    <main>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Hop On The Love Train!</h1>
        <p className={styles.sub_title}>
          Take a ride & discover our journey to tieing the knot!
        </p>
      </div>
      <div className={styles.story_card_container}>
        {ourStory.map((story) => (
          <StoryCard
            key={story.id}
            date={story.date}
            text={story.text}
            dateTwo={story.dateTwo}
            textTwo={story.textTwo}
            cardId={story.id}
          />
        ))}
      </div>
      <Image
        src={ourStoryBackground.photo}
        alt={ourStoryBackground.alt}
        width={ourStoryBackground.width}
        height={ourStoryBackground.height}
        className={styles.our_story_bg}
        priority
      />
    </main>
  );
}
