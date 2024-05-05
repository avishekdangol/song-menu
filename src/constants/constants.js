import sparks from '@/assets/songs/sparks.wav'
import solitude from '@/assets/songs/solitude.wav'
import masterpiece from '@/assets/songs/masterpiece.wav'
import normal from '@/assets/songs/normal.wav'
import theJeanGenie from '@/assets/songs/the jean genie.wav'
import kentuckyPill from '@/assets/songs/kentucky pill.wav'
import upsideDown from '@/assets/songs/upside down.wav'
import chinese from '@/assets/songs/chinese.wav'

export const scaleFactor = 4

export const dialogueData = {
  waterTable: {
    text: 'Still or Sparkling Water?',
    choices: [
      { label: 'Still', choice: 'still' },
      { label: 'Sparkling', choice: 'sparkling' },
    ],
    choiceType: 'song',
  },
  poppadomOrBread: {
    text: 'POPPADOM OR BREAD!!? POPPADOM OR BREAD!!?',
    choices: [
      { label: 'Poppadom', choice: 'poppadom' },
      { label: 'Bread', choice: 'bread' },
    ],
    choiceType: 'song',
  },
  starter: {
    text: 'Let\'s start with The Jean Genie!!',
    choices: [{ label: 'Let\'s get started' }],
    choiceType: 'song',
  },
  mainCourse: {
    text: 'The main course should be a masterpiece',
    choiceType: 'song',
    choices: [{ label: 'Try it' }],
  },
  sideDish: {
    text: 'Want some up(side) dish? Why not try some upside down burger??',
    choiceType: 'song',
    choices: [{ label: 'Yes, Please' }],
  },
  drinks: {
    text: 'Let\'s have a glass of mountain dew with "Kentucky Pill"',
    choiceType: 'song',
    choices: [{ label: 'Drink it' }]
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
    text: 'Oooh, Izzy and Avi adventures on the TV! That\'s so cool!! Watch?',
    choices: [{ label: 'Watch' }],
    choiceType: 'visual',
    close: 'Later',
  },
  exit: {
    text: 'You are trapped here! No way out!!',
  },
  secretDoor: {
    text: 'Yay! You found a secret door! When you enter the room, drag around and click on the objects to interact!',
    choiceType: 'spline',
    choices: [{ label: 'Enter' }]
  },
}

export const songs = {
  sparkling: {
    title: '(Sparks)ling Water',
    song: sparks,
  },
  poppadom: {
    title: '(Normal) Poppadom',
    song: normal,
  },
  bread: {
    title: '(Chinese) Bread',
    song: chinese,
  },
  starter: {
    title: 'Starter: The Jean Genie',
    song: theJeanGenie,
  },
  mainCourse: {
    title: 'Main: Masterpiece',
    song: masterpiece,
  },
  sideDish: {
    title: 'Side: (Upside Down) Burger',
    song: upsideDown,
  },
  drinks: {
    title: 'Drink: Mountain Dew with (Kentucky Pill)',
    song: kentuckyPill,
  },
  dessert: {
    title: 'Dessert: Solitude',
    song: solitude,
  },
}
