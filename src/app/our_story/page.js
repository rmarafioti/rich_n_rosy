"use client";

import { ourStory } from "../data/outStory";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import { our_story_background } from "../data/photos";
import Image from "next/image";

import styles from "../styling/our_story.module.css";

function StoryCard({ date, text, cardId }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.story_card} ${styles[`card_${cardId}`]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <p className={styles.date}>{date}</p>
      <p>{text}</p>
      <p className={styles.next_stop}>keep scrolling for the next stop</p>
    </div>
  );
}

export default function Our_Story() {
  const ourStoryBackground = our_story_background;

  return (
    <main className={styles.our_story_page}>
      <h1 className={styles.title}>Our Story</h1>
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
      />
    </main>
  );
}
