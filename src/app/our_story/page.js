"use client";

import { ourStory } from "../data/outStory";
import useVisibilityObserver from "../hooks/useVisibilityObserver";

import styles from "../styling/our_story.module.css";

function StoryCard({ date, text }) {
  const [ref, isVisible] = useVisibilityObserver(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.story_card} ${isVisible ? styles.visible : ""}`}
    >
      <p className={styles.date}>{date}</p>
      <p>{text}</p>
    </div>
  );
}

export default function Our_Story() {
  return (
    <main>
      <h1 className={styles.title}>Our Story</h1>
      <div className={styles.story_card_container}>
        {ourStory.map((story) => (
          <StoryCard key={story.id} date={story.date} text={story.text} />
        ))}
      </div>
    </main>
  );
}
