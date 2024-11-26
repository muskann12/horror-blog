'use client'
import { useParams } from "next/navigation";
import { useState } from "react";

const StoryPage = () => {
  const { id } = useParams();
  const storyId = id as keyof typeof stories;

  // Stories Object with 8 different stories
  const stories = {
    "1": {
      title: "The Haunted House",
      content: [
        { type: "text", value: "It was a dark and stormy night when they arrived at the old mansion. John rents a house with his sister, Patty, despite the reputation that the house is haunted. John rents a house with his sister, Patty, despite the reputation that the house is haunted. The siblings find it impossible to keep any servants because of strange noises throughout the house so they live there alone, with one deaf stableman who is unaffected by the spooky rappings. Patty arranges for a group of friends to visit for three months to see if anyone else experiences supernatural activity in the house.  The seven friends draw different rooms in the house to sleep in and they all agree to keep any ghostly encounters to themselves — unless otherwise forced — until twelfth night, when they will gather to share their individual stories.  " },
        { type: "image", value: "/images/house.png" },
        { type: "text", value: "The walls seemed to whisper secrets of those long gone.When they gather to share what has happened to them the stories are very varied but they all have a strangeness about them. The individual stories of the characters were contributed by Wilkie Collins, Hesba Stretton, George Augustus Sala, Adelaide Anne Procter, Charles Dickens and Elizabeth Gaskell.   After the successful Christmas books of the 1840s, Dickens followed up with yearly Christmas stories published in his journals from 1850 to 1867. The 'Christmas numbers' as they were known included stories by Dickens as well as other authors. For Christmas in 1859, Dickens published this story, which includes short stories by Hesba Stretton, George Augustus Sala, Adelaide Anne Proctor, Wilkie Collins and Elizabeth Gaskell." }
      ]
    },
    "2": {
      title: "The Forbidden Forest",
      content: [
        { type: "text", value: "Deep within the forest, there lies a secret waiting to be uncovered. Samuel Blink is a 12-year-old boy living in England with his family — his ten-year-old sister, Martha Blink, his Mother, Liz Blink, and his Father, Steve Blink. Whilst en route to a surprise location for his younger sibling's birthday, the parents are killed when a log falls onto the front section of the car, brutally and violently killing his parents in graphic detail. When the police show up they repeatedly beat Samuel Blink because he was crying that his parents died. And that’s pathetic" },
        { type: "image", value: "/images/shadoww.png" },
        { type: "text", value: "The air was thick with mystery, and every rustle of the leaves seemed to carry a warning. A week later, a letter comes from their Aunt Eda in Norway. The letter states that they will be coming to Norway the following day. Upon their arrival, Samuel is not impressed with the surroundings. Their new residence is located next to the infamous 'Shadow Forest', which Samuel has a feeling he had been to before. One evening Samuel is told the secret of Shadow Forest. Uncle Henrik had gone into the forest 10 years ago and never came out. Not long after, whilst rummaging through his aunt's attic, Samuel finds a book entitled Creatures of Shadow Forest. Later he discovers that Martha has disappeared.He enters the forest in search of Martha and encounters multiple creatures described in his newfound book. Eventually he locates his sister and the family dog who has been under a curse implemented by the sinister 'Change Maker', whom they battle and inevitably defeat revealing the dog to be their uncle. The family is reunited and continue to live in Norway" }
      ]
    },
    "3": {
      title: "Whispers in the Dark",
      content: [
        { type: "text", value: "After years of searching, archaeologists finally discovered the entrance to the Lost City, hidden beneath the sands of the desert Whisper in the Dark follows Maddy, a teenager of Narragansett descent, who finds herself being stalked by the Whisperer in the Dark, a vampire-like creature that was the subject of countless tales told by Maddy’s family. The book opens with Maddy picking up a call and hearing nobody on the other end — save for her strangely echoing voice. Having just dreamt of encountering the monster in a cave, she imagines the creature improbably calling her from his underground lair. The image of a voice coming out of a phone and echoing in hollow darkness of cave is a scenario I could have never fathomed but is nonetheless thoroughly creepy.." },
        { type: "image", value: "/images/h3.png" },
        { type: "text", value: "But inside, they found far more than they expected.Having two horror nerds as protagonists is fun and refreshing in a spooky middle grade novel. Bruchac has fun with it, cleverly commenting on his own story and calling out tropes and conventions by using the horror stories that made them so ubiquitous as examples. The book’s title is also similar to that of a novella by H.P. Lovecraft, and he is name-dropped a couple of times. It makes sense: the action takes place in Rhode Island (prime Lovecraft Country), and its themes and atmosphere sometimes veers into the eldritch. The man’s influence on horror runs deep, but I’m still surprised that the story didn’t comment on his terrible, racist views at all. But I understand that maybe this wasn’t the place for it. Still, on a personal note: a Lovecraftian story written by a Native American author would have sent the intolerant wretch into hysterics and I just enjoy that image." }
      ]
    },
    "4": {
      title: "The Cursed Doll",
      content: [
        { type: "text", value: "An ancient artifact, said to bring good fortune, had a dark side no one knew about until it was too late.According to legend, this doll was passed on from generation to generation to expecting mothers. Each mother was cursed with having two children, a boy and a girl respectively. The son isn't expected to live long. Each boy lives to be about three days old before succumbing to unknown circumstances." },
        { type: "image", value: "/images/doll.png" },
        { type: "text", value: "As the curse spread, they realized their mistake. It is said that the doll traps the souls of the boys within its body wherein they are expected to remain until Judgment Day. Legend has it that it began when a woman received the doll as a pregnancy gift from a friend. This friend and the woman had a bitter relationship for some unknown reason, and it's believed that she placed a curse on the doll out of jealousy. Three days after her son was born, he was stricken with a malady and died. Sometime after the death of her son, she heard crying that seemed to be emitting from the doll. Upon closer inspection, she concluded that her son's soul was imprisoned within the doll." }
      ]
    },
    "5": {
      title: "The Forgotten Cemetery",
      content: [
        { type: "text", value: "A lone ship sailed the seas, abandoned by its crew, but some say the crew never truly left. It was a late afternoon when I first heard the tale. I had always been drawn to the darker side of life, fascinated by stories of the unknown, the eerie, and the forgotten. So when I stumbled upon a dusty, ancient-looking book in the forgotten corner of the local library, my curiosity surged like a tide.The book was leather-bound, its pages yellowed with age, and it exuded a peculiar scent of decay and mystery. As I flipped through its fragile pages, one passage caught my attention: a mention of “The Forgotten Cemetery.” The words seemed to leap off the page, demanding my attention. The cemetery was said to be hidden deep within the woods on the outskirts of our town, a place few dared to visit, and fewer still came back from. The old book described the cemetery as a place where restless souls whispered secrets from beyond the grave." },
        { type: "image", value: "/images/cc.png" },
        { type: "text", value: "Strange lights and eerie sounds emanated from the ship, even though no one was aboard.When I returned to the library the next day to try and learn more about the cemetery, the book was gone. I searched the shelves, but it had vanished, as if it had never existed at all. The only trace of the forgotten cemetery was the lingering feeling of unease that haunted me for days. And so, the cemetery remains a mystery — a place forgotten by all, save for the souls trapped within its boundaries. But even now, I hear the whispers in my dreams, a warning from the past that I can never seem to escape. Some stories, once learned, cannot be unlearned. And some places, once visited, never truly let go.." }
      ]
    },
    "6": {
      title: "he Whispering Shadows",
      content: [
        { type: "text", value: "At midnight, the old train station came alive with the sound of an approaching train, but no train was ever seen. It was a cold evening when I ventured into the forest known as The Whispering Shadows. Legend had it that the forest was alive, and that shadows moved and whispered secrets to those who dared enter. I had always dismissed the stories, but when I found my great-grandfather’s old journal, I couldn’t resist.As I entered the forest, an eerie silence filled the air. Then, the whispers began. Soft at first, they called me deeper. I felt the shadows closing in, wrapping around me, their cold fingers grazing my skin. The whispers grew louder, voices of the lost souls, begging me to stay" },
        { type: "image", value: "/images/ss.png" },
        { type: "text", value: "Rumor had it, the train was cursed, and its passengers were trapped in time.Suddenly, I fell into a dark pit, where I saw twisted faces trapped within the shadows. They weren’t just shadows—they were the souls of the lost, forever feeding on fear.ust as I thought I’d be consumed, a golden light appeared, revealing the faint figure of my great-grandfather. His voice was a warning: “Run. The shadows will take you.” ran, my heart pounding, and barely made it out alive. The forest was real, and the shadows were hungry. I never spoke of that night again, but I know they are still out there, waiting for the next soul to wander too far." }
      ]
    },
    "7": {
      title: "The Haunted Mirror",
      content: [
        { type: "text", value: "In a small town, a family is cursed by an ancient vampire who once roamed the land.t was a rainy evening when I found the old mirror at a yard sale, its ornate frame covered in dust. The seller, a strange old woman, gave me a warning as I handed over the money. Beware of what you see, she whispered with a grim smile. One night, unable to resist, I stepped closer to the mirror. The glass rippled like water, and to my horror, I saw a figure standing behind me. It was a woman, pale and lifeless, her eyes wide with fear. Before I could react, her hand shot out from the mirror, grabbing my wrist. Her fingers were ice-cold, and her grip tightened with an unnatural strength." },
        { type: "image", value: "/images/mm.png" },
        { type: "text", value: "The curse is passed from generation to generation, and only one person can break it.With all my strength, I yanked my arm back, stumbling away from the mirror. The glass returned to normal, but the woman's haunting face lingered in my mind. From that night on, I could hear her whispers whenever I looked into the mirror. I knew she was waiting, biding her time, for the day she would claim me as her own.And so, I locked the mirror away in the attic, but the whispers never stopped.." }
      ]
    },
    "8": {
      title: "The Creeping Darkness",
      content: [
        { type: "text", value: "Every full moon, strange things happen in the small village It began on a night like any other. I had been working late, staring at the glowing screen of my laptop, when I noticed the room growing unnaturally dark. The lightbulb flickered above me, casting long shadows that seemed to stretch and twist. At first, I thought it was just the result of exhaustion, but the darkness deepened, spreading across the walls like an ink stain. glanced at the clock—midnight. But as I looked away, the darkness crept closer, inch by inch, as if it had a life of its own. It was no longer just the absence of light; it had form. The shadows began to move, their edges curling, their tendrils reaching out as if to touch me.." },
        { type: "image", value: "/images/dd.png" },
        { type: "text", value: "People disappear, and whispers of a werewolf living among them grew stronger.I stood up, heart racing, unsure whether to run or stay. My breath grew heavy, the air growing colder with each passing second. The creeping darkness seemed to grow in strength, and I could hear faint whispers, indistinguishable yet chilling. My mind screamed for me to escape, but my feet felt like they were cemented to the floor.With all the strength I could muster, I managed to stumble toward the door, pulling it open just as the darkness closed in. The light from the hallway pierced the blackness, and for a moment, I was free. The shadows receded, leaving only a lingering chill in the air.But that night, I knew the truth. The creeping darkness was not just in my room—it was inside me, waiting, biding its time. And one day, it would return." }
      ]
    },
  };

  const story = stories[storyId];

  if (!story) {
    return <p className="text-white">Story not found.</p>;
  }

  // Comment State
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Add new comment
  const addComment = () => {
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName("");
      setComment("");
    }
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col items-center min-h-screen bg-gray-950 p-10 pt-24">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl font-creepster mb-8 text-center py-5 text-red-500">{story.title}</h1>

          {/* Story Content */}
          <div className="space-y-6 mb-12 text-white font-normal">
            {story.content.map((section, index) => (
              section.type === "text" ? (
                <p key={index} className="text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                  {section.value}
                </p>
              ) : (
                <div key={index} className="flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <img
                    src={section.value}
                    alt="Story Image"
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-lg">{story.content[index + 1]?.value || ""}</p>
                </div>
              )
            ))}
          </div>

          {/* Comment Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Comments</h2>
            {comments.length > 0 ? (
              <ul className="space-y-4">
                {comments.map((cmt, index) => (
                  <li key={index} className="border-b border-gray-700 pb-4 text-white">
                    <p className="font-semibold">{cmt.name}:</p>
                    <p>{cmt.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">Be the first to comment!</p>
            )}

            <div className="mt-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 p-2 rounded-lg mb-4 text-white"
              />
              <textarea
                placeholder="Your Comment (How did you like the story?)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-gray-800 p-2 rounded-lg mb-4 text-white"
                rows={4}
              ></textarea>
              <button
                onClick={addComment}
                className="w-full bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
