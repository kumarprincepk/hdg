"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./GalleryImages.module.css";
// import GalleryImg from '../../../public/assets/images/gallery/picture1.jpg'

const PlayIcon = () => <span aria-hidden="true">▶</span>;
const PauseIcon = () => <span aria-hidden="true">⏸</span>;
const FullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const ExitFullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const CloseIcon = () => <span aria-hidden="true">×</span>;
const PrevIcon = () => <span aria-hidden="true">◀</span>;
const NextIcon = () => <span aria-hidden="true">▶</span>;

export default function GalleryImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [key, setKey] = useState(0);
  const overlayRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = [
    {
      original: "/assets/images/gallery/picture9.jpg",
      thumbnail: "/assets/images/gallery/picture9.jpg",
    },
    {
      original: "/assets/images/gallery/picture14.jpg",
      thumbnail: "/assets/images/gallery/picture14.jpg",
    },
    {
      original: "/assets/images/gallery/picture1.jpg",
      thumbnail: "/assets/images/gallery/picture1.jpg",
    },
    {
      original: "/assets/images/gallery/picture2.jpeg",
      thumbnail: "/assets/images/gallery/picture2.jpeg",
    },
    {
      original: "/assets/images/gallery/picture10.jpg",
      thumbnail: "/assets/images/gallery/picture10.jpg",
    },
    {
      original: "/assets/images/gallery/picture3.jpg",
      thumbnail: "/assets/images/gallery/picture3.jpg",
    },
    {
      original: "/assets/images/gallery/picture11.jpg",
      thumbnail: "/assets/images/gallery/picture11.jpg",
    },
    {
      original: "/assets/images/gallery/picture4.jpg",
      thumbnail: "/assets/images/gallery/picture4.jpg",
    },
    {
      original: "/assets/images/gallery/picture5.jpg",
      thumbnail: "/assets/images/gallery/picture5.jpg",
    },
    {
      original: "/assets/images/gallery/picture6.jpeg",
      thumbnail: "/assets/images/gallery/picture6.jpeg",
    },
    {
      original: "/assets/images/gallery/picture7.jpeg",
      thumbnail: "/assets/images/gallery/picture7.jpeg",
    },
    {
      original: "/assets/images/gallery/picture8.jpeg",
      thumbnail: "/assets/images/gallery/picture8.jpeg",
    },
    {
      original: "/assets/images/gallery/picture12.jpg",
      thumbnail: "/assets/images/gallery/picture12.jpg",
    },
    {
      original: "/assets/images/gallery/picture13.jpg",
      thumbnail: "/assets/images/gallery/picture13.jpg",
    },
  ];

  const MAX_VISIBLE = 7;
  const visibleThumbnails = images.slice(0, MAX_VISIBLE);

  const openGalleryAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setSlideDirection("right");
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToNext() : goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(goToNext, 3000);
    }
    setIsPlaying((p) => !p);
  };

  const toggleFullscreen = () => {
    const el = overlayRef.current;
    if (!document.fullscreenElement) {
      if (el?.requestFullscreen) {
        el.requestFullscreen().then(() => setIsFullscreen(true));
      }
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const goToPrev = () => {
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setKey((prev) => prev + 1);
  };
  const goToNext = () => {
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setKey((prev) => prev + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.code === "Space") {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-2 mb-md-4">
              <h5>Spotlight</h5>
            </div>
            <div className="col-12 mb-0 mb-md-4">
              <p className="mb-4 text">
                Explore a curated selection of our latest shots. Tap any tile to
                open the immersive gallery, swipe or use the arrows to navigate,
                and hit play for a smooth slideshow experience.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="gallery" aria-label="Image gallery grid">
              {visibleThumbnails.map((img, idx) => {
                const areaClass = `image-${String.fromCharCode(97 + idx)}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`image ${areaClass} btn p-0 border-0 bg-transparent position-relative`}
                    onClick={() => openGalleryAt(idx)}
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <Image
                      src={img.thumbnail}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      priority={idx < 2}
                      className="img-fluid"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            ref={overlayRef}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-95 d-flex flex-column"
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 999 }}
          >
            {/* Top Bar */}
            <div className="d-flex align-items-center justify-content-between p-3 text-white">
              <div className="small">
                {currentIndex + 1} / {images.length}
              </div>

              <div className="d-flex gap-2">
                <button
                  onClick={togglePlayPause}
                  className={`btn btn-dark rounded-circle p-2 ${styles.roundBtn}`}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>

                <button
                  onClick={toggleFullscreen}
                  className={`btn btn-dark rounded-circle p-2 ${styles.roundBtn}`}
                >
                  {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                </button>

                <button
                  onClick={handleClose}
                  className={`btn btn-dark rounded-circle p-2 ${styles.roundBtn}`}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* Image Viewer */}
            <div
              className="flex-grow-1 d-flex align-items-center justify-content-center position-relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className={`position-absolute start-0 ms-3 z-3 btn btn-dark rounded-circle ${styles.navBtn}`}
              >
                <PrevIcon />
              </button>

              {/* Image Wrapper */}
              <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden">
                <Image
                  key={key}
                  src={images[currentIndex].original}
                  alt={`Image ${currentIndex + 1}`}
                  fill
                  className={`img-fluid ${styles.slide} ${
                    slideDirection === "left"
                      ? styles.slideLeft
                      : slideDirection === "right"
                      ? styles.slideRight
                      : styles.slideIn
                  }`}
                  priority
                  onTransitionEnd={() => setSlideDirection(null)}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className={`position-absolute end-0 me-3 z-3 btn btn-dark rounded-circle ${styles.navBtn}`}
              >
                <NextIcon />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="p-3 bg-dark bg-opacity-75 overflow-auto">
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`position-relative w-100 h-100 flex-shrink-0 border border-2 p-0 overflow-hidden rounded ${
                      index === currentIndex
                        ? styles.thumbActive
                        : styles.thumbInactive
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    style={{ width: "60px", height: "60px" }}
                  >
                    <Image
                      src={img.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="img-fluid"
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* <div className="mb-5 mx-auto">
        <section className={`${styles.galleryGrid} gallery`} aria-label="Image gallery grid">
          {visibleThumbnails.map((img, idx) => {
            const areaClass = `image-${String.fromCharCode(97 + idx)}`;
            return (
              <button
                key={idx}
                type="button"
                className={`image ${areaClass} btn p-0 border-0 bg-transparent position-relative`}
                onClick={() => openGalleryAt(idx)}
                aria-label={`Open image ${idx + 1}`}
              >
                <Image
                  src={img.thumbnail}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="gallery-thumb"
                  priority={idx < 2}
                />
              </button>
            );
          })}
        </section>

        <div className="text-start mb-4 mt-5">
          <div className="heading-section mb-3 text-start">
            <h4 className="text-1 split-text effect-right"> Spotlight</h4>
          </div>
          <p className="small text-start text-dark">
            Explore a curated selection of our latest shots. Tap any tile to open
            the immersive gallery, swipe or use the arrows to navigate, and hit
            play for a smooth slideshow experience.
          </p>
        </div>

        {isOpen && (
          <div
            ref={overlayRef}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-95 d-flex flex-column"
            role="dialog"
            aria-modal="true"
            style={{zIndex: "999"}}
          >
            <div className="d-flex align-items-center justify-content-between p-3 text-white">
              <div className="small">
                {currentIndex + 1} / {images.length}
              </div>
              <div className="d-flex gap-2">
                <button onClick={togglePlayPause} className={`btn btn-dark ${styles.roundBtn}`}>
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button onClick={toggleFullscreen} className={`btn btn-dark ${styles.roundBtn}`}>
                  {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                </button>
                <button onClick={handleClose} className={`btn btn-dark ${styles.roundBtn}`}>
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div
              className="flex-grow-1 d-flex align-items-center justify-content-center position-relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                onClick={goToPrev}
                className={`position-absolute start-0 ms-3 z-3 btn btn-dark rounded-circle ${styles.navBtn}`}
              >
                <PrevIcon />
              </button>

              <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden">
                <Image
                  key={key}
                  src={images[currentIndex].original}
                  alt={`Image ${currentIndex + 1}`}
                  fill
                  className={`object-contain ${styles.slide} ${
                    slideDirection === "left"
                      ? styles.slideLeft
                      : slideDirection === "right"
                      ? styles.slideRight
                      : styles.slideIn
                  }`}
                  priority
                  onTransitionEnd={() => setSlideDirection(null)}
                />
              </div>

              <button
                onClick={goToNext}
                className={`position-absolute end-0 me-3 z-3 btn btn-dark rounded-circle ${styles.navBtn}`}
              >
                <NextIcon />
              </button>
            </div>

            <div className="p-3 bg-dark bg-opacity-75 overflow-auto">
              <div className="d-flex gap-2 justify-content-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`position-relative flex-shrink-0 border-2 p-0 overflow-hidden ${styles.thumbBtn} ${
                      index === currentIndex ? styles.thumbActive : styles.thumbInactive
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <Image src={img.thumbnail} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
}
