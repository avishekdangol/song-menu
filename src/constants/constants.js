import still from '@/assets/songs/still.mp3'

export const scaleFactor = 4

export const dialogueData = {
  waterTable: {
    text: "Still or Sparkling Water?",
    choices: ['Still', 'Sparkling'],
    choiceType: 'song',
  },
  poppadomOrBread: {
    text: "POPPADOM OR BREAD!!? POPPADOM OR BREAD!!?",
    choices: ['Poppadom', 'Bread'],
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
    text: '',
  },
  bookshelves: {
    text: "Oh, Look! New additions to the bookshelves: 'The Greek and Roman Myths' and 'The Lost City of Z'.Thank you for these!! :)",
    close: 'Okay!',
  },
  tv: {
    text: "Oooh, Izzy and Avi adventures on the TV! That's so cool!! Watch?",
    choices: ['Watch'],
    choiceType: 'visual',
    close: 'Later',
  },
  exit: {
    text: "You are trapped here! No way out!!",
  },
}

export const songs = {
  Still: {
    title: 'Still Water - Song Name',
    song: still,
  },
}
