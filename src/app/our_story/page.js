"use client";

import { ourStory } from "../data/outStory";

function StoryCard({ date, text }) {
  return (
    <div>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
}

export default function section_three() {
  return (
    <main>
      <h1>Our Story</h1>
      <div>
        {ourStory.map((story) => (
          <StoryCard key={story.id} date={story.date} text={story.text} />
        ))}
      </div>
    </main>
  );
}
