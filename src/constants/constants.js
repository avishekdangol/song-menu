import still from '@/assets/songs/still.mp3'
import solitude from '@/assets/songs/solitude.wav'

export const scaleFactor = 4

export const dialogueData = {
  waterTable: {
    text: "Still or Sparkling Water?",
    choices: [
      { label: 'Still', choice: 'Still' },
      { label: 'Sparkling', choice: 'Sparkling' },
    ],
    choiceType: 'song',
  },
  poppadomOrBread: {
    text: "POPPADOM OR BREAD!!? POPPADOM OR BREAD!!?",
    choices: [
      { label: 'Poppadom', choice: 'Poppadom' },
      { label: 'Bread', choice: 'Bread' },
    ],
    choiceType: 'song',
  },
  starter: {
    text: '',
  },
  mainCourse: {
    text: '',
  },
  sideDish: {
    text: '',
  },
  drinks: {
    text: '',
  },
  dessert: {
    text: 'Solitude is a lovely dessert!',
    choiceType: 'song',
    choices: [{ label: 'Taste it' }],
  },
  bookshelves: {
    text: "Oh, Look! New additions to the bookshelves: 'The Greek and Roman Myths' and 'The Lost City of Z'.Thank you for these!! :)",
    close: 'Okay!',
  },
  tv: {
    text: "Oooh, Izzy and Avi adventures on the TV! That's so cool!! Watch?",
    choices: [{ label: 'Watch' }],
    choiceType: 'visual',
    close: 'Later',
  },
  exit: {
    text: "You are trapped here! No way out!!",
  },
  secretDoor: {
    text: "Yay! You found a secret door!",
    choiceType: 'spline',
    choices: [{ label: 'Enter' }]
  },
}

export const songs = {
  Still: {
    title: 'Still Water - Song Name',
    song: still,
  },
  dessert: {
    title: 'Dessert: Solitude',
    song: solitude,
  },
}
