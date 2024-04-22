import { store } from '@/store';
import { visual } from '@/constants/medias';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/shadcn/components/ui/button"
import { Skeleton } from "@/shadcn/components/ui/skeleton"
import { setCurrentVisual, setDialogue } from '@/store';
import { useEffect, useState } from 'react';

export default function PhotoViewer() {
  const state = store.getState()
  const [showCarousel, setShowCarousel] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowCarousel(true)
    }, 1500)
  })

  const closePhotoViewer = () => {
    store.dispatch(setCurrentVisual(null))

    const payload = {
      text: '',
      choices: [],
      showDialogue: false,
    }
    store.dispatch(setDialogue(payload))
  }

  return (
    <div className='relative'>
      {
        showCarousel
        && <Button
            className="absolute top-[40px] right-[50px] text-3xl rounded-full z-10"
            variant="destructive"
            onClick={closePhotoViewer}
          >X</Button>
      }

      {
        showCarousel
        ? (
          <Carousel
            className="bg-white"
            plugins={[
              Autoplay({
                delay: 4000,
              })
            ]}
          >
            <CarouselContent>
              {visual[state.currentVisual].map(visual => (
                <CarouselItem key={visual.image}>
                  <div className='w-screen h-screen relative'>
                    <img className='object-cover w-full h-full' src={visual.image} alt="" />
                    <span className="absolute left-10 bottom-10 photo-text text-rose-700 py-1 px-3 text-3xl font-semibold">{visual.text}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[50px]" />
            <CarouselNext className="right-[50px]" />
          </Carousel>
        ) : (
          <div className="bg-black w-screen h-screen p-5">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
        )
      }
    </div>
  )
}