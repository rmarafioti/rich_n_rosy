"use client";

import { ourStory } from "../data/outStory";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import { our_story_background } from "../data/photos";
import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";

import styles from "../styling/our_story.module.css";

function StoryCard({ date, text, cardId }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  const nextStopId = cardId + 1;
  const nextStopData = ourStory.find((card) => card.id === nextStopId);

  return (
    <div
      ref={ref}
      className={`${styles.story_card} ${styles[`card_${cardId}`]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <p className={styles.date}>{date}:</p>
      <p>{text}</p>
      <div className={styles.scroll_section}>
        <p className={styles.next_stop}>Next stop: {nextStopData?.date}</p>
        <FaCircleArrowDown className={styles.scroll_icon} />
      </div>
    </div>
  );
}

export default function Our_Story() {
  const ourStoryBackground = our_story_background;

  return (
    <main>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.sub_title}>Hop on the love train and</p>
        <p className={styles.sub_title}>
          discover our journey to tieing the knot!
        </p>
      </div>
      <div className={styles.story_card_container}>
        {ourStory.map((story, index) => (
          <StoryCard
            key={story.id}
            date={story.date}
            text={story.text}
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
