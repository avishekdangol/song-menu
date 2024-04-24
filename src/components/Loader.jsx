import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { thumbnails } from '@/constants/medias'
import '@/css/loader.css'

function Loader() {
  gsap.registerPlugin(useGSAP)
  const container = useRef()
  
  useGSAP(() => {
    gsap.to(".tp4", { strokeDashoffset: "0", ease: "none", duration: 4})
    gsap.to(".tp4", { fillOpacity: 1, duration: 2.3 }, "-=1.3");
    gsap.from(".image", { opacity: 0, duration: 0.1, stagger: 0.4, delay: 0.5 })
    gsap.to(".image", { opacity: 0, duration: 1, stagger: 0.4, delay: 1 })
    gsap.from(".image", { filter: 'grayscale(100%)', duration: 0.1, stagger: 0.4, delay: 0.5 })
    gsap.to(".image", { filter: 'grayscale(100%)', duration: 4, stagger: 0.4, delay: 0.5 })
  }, { scope: container })

  return (
    <div
        ref={container}
        className="absolute bg-teal-900 z-10 w-full h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-wrap absolute top-0 left-0">
          {
            thumbnails.map((image, index) => (
              <div
                className="image-wrapper"
                key={`${image}-${index}`}
              >
                <img
                  className='image w-full h-full object-cover'
                  src={image}
                  alt=""
                />
              </div>
            ))
          }
        </div>

        <svg className="text-center min-w-[420px] h-[60px] z-10">
          <text className="texto" fontFamily='Arial' x="10px" y="50px" fill="#999" stroke="#e6e6e6" strokeWidth="3" fontSize="50px">
            <tspan className="tp tp4">S</tspan>
            <tspan className="tp tp4" dx="10px">O</tspan>
            <tspan className="tp tp4" dx="10px">N</tspan>
            <tspan className="tp tp4" dx="10px">G</tspan>
            <tspan className="tp tp4" dx="50px">M</tspan>
            <tspan className="tp tp4" dx="10px">E</tspan>
            <tspan className="tp tp4" dx="10px">N</tspan>
            <tspan className="tp tp4" dx="10px">U</tspan>
          </text>
        </svg>

        <svg className="text-center min-w-[320px] h-[60px]">
          <text className="texto" fontFamily='Arial' x="10px" y="50px" fill="#999" stroke="#e6e6e6" strokeWidth="3" fontSize="50px">
            <tspan className="tp tp4">P</tspan>
            <tspan className="tp tp4" dx="10px">O</tspan>
            <tspan className="tp tp4" dx="10px">D</tspan>
            <tspan className="tp tp4" dx="10px">C</tspan>
            <tspan className="tp tp4" dx="10px">A</tspan>
            <tspan className="tp tp4" dx="10px">S</tspan>
            <tspan className="tp tp4" dx="10px">T</tspan>
          </text>
        </svg>
      </div>
  );
}

export default Loader