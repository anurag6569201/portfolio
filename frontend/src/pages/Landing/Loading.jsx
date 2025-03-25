import "../../assets/Loading/Loading.css";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Landing from "./Landing";

function Loading() {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);
  const animationContainerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline();

      // Initial Animation
      t1.from(".imrks", { opacity: 0, xPercent: -100, delay: 0.5, duration: 1, ease: "power1.out" })
        .from(".dot", { opacity: 0, yPercent: 100, duration: 1, ease: "power1.out" })
        .to(".dot", { x: 20, duration: 1, ease: "power1.out" })
        .to(".dot", { x: -10, duration: 0.5, ease: "power1.out" })
        .to(".imrks", { opacity: 0, xPercent: -100, duration: 1 })
        .to(".dot", { opacity: 0, duration: 1, ease: "expo.out" }, 3)
        .to(".cover", { xPercent: -100, duration: 1 }, 3)
        .to(".cover-2", { xPercent: -100, duration: 1 }, 3.2)
        .to(".cover-3", { xPercent: -100, duration: 1 }, 3.4)
        .to(".cover-4", { xPercent: -100, duration: 1 }, 3.6)
        .from(".imrks2", { xPercent: -100, duration: 1, opacity: 0 }, 3.8)
        .from(".cover-5", { yPercent: -100, duration: 1, delay: 0.4 })
        .from(".logo", { xPercent: -100, opacity: 0, duration: 1 })
        .from(".item", { xPercent: 100, opacity: 0, duration: 1, stagger: { amount: 0.5 } })
        .from(imgRef.current, { xPercent: -100, opacity: 0, duration: 1 }, 6.2)
        .from(headingRef.current, { xPercent: 100, opacity: 0, duration: 1 }, 6.2)
        .from(subHeadingRef.current, { xPercent: 100, opacity: 0, duration: 1.1 }, 6.2)
        .from(buttonRef.current, { yPercent: 100, opacity: 0, duration: 2, ease: "bounce" }, 6.5);
    }, animationContainerRef);

    // Mousemove effect
    const handleMouseMove = (e) => {
      let xPos = e.clientX / window.innerWidth - 0.5;
      let yPos = e.clientY / window.innerHeight - 0.5;

      gsap.to(imgRef.current, { rotationY: xPos * 20, rotationX: yPos * 20, duration: 1 });
      gsap.to(headingRef.current, { rotationY: xPos * 20, rotationX: yPos * 20, duration: 1 });
      gsap.to(subHeadingRef.current, { rotationY: xPos * 20, rotationX: yPos * 20, duration: 1 });
      gsap.to(buttonRef.current, { rotationY: xPos * 20, rotationX: yPos * 20, duration: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert(); // Cleanup GSAP animations
    };
  }, []);

  return (
    <div ref={animationContainerRef}>
      <div className="cover-5">
          <Landing/>
      </div>

      <div className="cover-4"></div>
      <div className="cover-3"></div>
      <div className="cover-2"></div>
      <div className="cover">
        <div className="cover-heading">
          <h1 className="imrks">imrks</h1>
          <span className="dot">.</span>
        </div>
      </div>
      <div className="imrks2">Rohit Kumar Saket</div>
    </div>
  );
}

export default Loading;
