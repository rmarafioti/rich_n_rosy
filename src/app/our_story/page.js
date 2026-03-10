"use client";

import { useState, useEffect } from "react";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import { our_story_background } from "../data/photos";
import { ourStory, train_icon } from "../data/ourStory";
import Responsive_Image_Theme from "../components/Responsive_Image_Theme";
import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";

import styles from "../styling/our_story.module.css";

function StoryCard({ date, text, dateTwo, textTwo, cardId, photoData }) {
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
        <Responsive_Image_Theme
          photoData={photoData}
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 667);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loading_container}>
        <div className={styles.loader}>
          <Responsive_Image_Theme
            photoData={train_icon}
            className={styles.train_icon}
          />
          <p className={styles.arrival_message}>
            The Love Train will arrive shortly...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className={styles.header_container}>
        <h1 className={styles.title}>Hop On The Love Train!</h1>
        <div className={styles.train_container}>
          <Responsive_Image_Theme
            photoData={train_icon}
            className={styles.train_icon}
          />
          <p className={styles.sub_title}>
            Take a ride & discover our journey to tying the knot!
          </p>
        </div>
      </div>
      <div className={styles.story_card_container}>
        {ourStory.map((story) => (
          <StoryCard
            key={story.id}
            date={story.date}
            text={story.text}
            photoData={story}
            dateTwo={story.dateTwo}
            textTwo={story.textTwo}
            cardId={story.id}
          />
        ))}
      </div>
      {isDesktop ? (
        <Responsive_Image_Theme
          photoData={our_story_background.desktop}
          className={styles.our_story_bg}
        />
      ) : (
        <Image
          src={our_story_background.mobile.src}
          alt={our_story_background.alt}
          width={our_story_background.mobile.width}
          height={our_story_background.mobile.height}
          className={styles.our_story_bg_mobile}
          priority
        />
      )}
    </main>
  );
}
