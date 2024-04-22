import sparks from '@/assets/songs/sparks.wav'
import solitude from '@/assets/songs/solitude.wav'
import masterpiece from '@/assets/songs/masterpiece.wav'
import normal from '@/assets/songs/normal.wav'

export const scaleFactor = 4

export const dialogueData = {
  waterTable: {
    text: "Still or Sparkling Water?",
    choices: [
      { label: 'Still', choice: 'still' },
      { label: 'Sparkling', choice: 'sparkling' },
    ],
    choiceType: 'song',
  },
  poppadomOrBread: {
    text: "POPPADOM OR BREAD!!? POPPADOM OR BREAD!!?",
    choices: [
      { label: 'Poppadom', choice: 'poppadom' },
      { label: 'Bread', choice: 'bread' },
    ],
    choiceType: 'song',
  },
  starter: {
    text: '',
  },
  mainCourse: {
    text: 'The main course should be a masterpiece',
    choiceType: 'song',
    choices: [{ label: 'Try it' }],
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
  sparkling: {
    title: 'Sparks - Sparkling Water',
    song: sparks,
  },
  poppadom: {
    title: '(Normal) Poppadom',
    song: normal,
  },
  mainCourse: {
    title: 'Main: Masterpiece',
    song: masterpiece,
  },
  dessert: {
    title: 'Dessert: Solitude',
    song: solitude,
  },
}
