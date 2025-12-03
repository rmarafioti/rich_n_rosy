"use client";

import { ourStory } from "../data/ourStory";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import {
  our_story_background,
  our_story_background_dark,
  our_story_background_mobile,
} from "../data/photos";
import ResponsiveImage from "../components/Responsive_Image";
import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";

import styles from "../styling/our_story.module.css";

function StoryCard({
  date,
  text,
  src,
  alt,
  width,
  height,
  dateTwo,
  textTwo,
  cardId,
}) {
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
      <div className={styles.date_section}>
        <p className={styles.date}>{date}:</p>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.our_story_icons_mobile}
        />
        <p className={styles.text}>{text}</p>
      </div>
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
  const ourStoryBackgroundDark = our_story_background_dark;
  const ourStoryBackgroundMobile = our_story_background_mobile;

  return (
    <main>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Hop On The Love Train!</h1>
        <p className={styles.sub_title}>
          Take a ride & discover our journey to tying the knot!
        </p>
      </div>
      <div className={styles.story_card_container}>
        {ourStory.map((story) => (
          <StoryCard
            key={story.id}
            date={story.date}
            text={story.text}
            src={story.src}
            alt={story.alt}
            width={story.width}
            height={story.height}
            dateTwo={story.dateTwo}
            textTwo={story.textTwo}
            cardId={story.id}
          />
        ))}
      </div>
      <ResponsiveImage
        pcPhoto={ourStoryBackground}
        mobilePhoto={ourStoryBackgroundMobile}
        pcClass={styles.our_story_bg}
        mobileClass={styles.our_story_bg_mobile}
      />
      <Image
        src={ourStoryBackgroundDark.photo}
        alt={ourStoryBackgroundDark.alt}
        width={ourStoryBackgroundDark.width}
        height={ourStoryBackgroundDark.height}
        className={styles.our_story_bg_dark}
        priority
      />
    </main>
  );
}
