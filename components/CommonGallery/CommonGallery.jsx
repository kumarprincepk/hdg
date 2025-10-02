"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

// Icons
const PlayIcon = () => <span aria-hidden="true">▶</span>;
const PauseIcon = () => <span aria-hidden="true">⏸</span>;
const FullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const ExitFullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const CloseIcon = () => <span aria-hidden="true">×</span>;
const PrevIcon = () => <span aria-hidden="true">◀</span>;
const NextIcon = () => <span aria-hidden="true">▶</span>;

export default function Gallery({ images = [], title, description }) {
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

  const MAX_VISIBLE = 4;
  const visibleThumbnails = images.slice(0, MAX_VISIBLE);

  const openGalleryAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setSlideDirection("right");
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setSlideDirection("left");
        goToNext();
      } else {
        setSlideDirection("right");
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Slideshow
  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSlideDirection("left");
        goToNext();
      }, 3000);
    }
    setIsPlaying((p) => !p);
  };

  // Fullscreen
  const toggleFullscreen = () => {
    const el = overlayRef.current || document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.()
        .then(() => setIsFullscreen(true))
        .catch((err) =>
          console.error(`Error enabling fullscreen: ${err?.message || err}`)
        );
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  // Navigation
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

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.code === "Space") {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Fullscreen tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Cleanup slideshow
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="mb-5 mx-auto">
      {/* Thumbnails grid */}
      <section className="gallery-common" aria-label="Image gallery grid">
        {visibleThumbnails.map((img, idx) => {
          const areaClass = `image-${String.fromCharCode(97 + idx)}`;
          return (
            <button
              key={idx}
              type="button"
              className={`image ${areaClass} position-relative`}
              onClick={() => openGalleryAt(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <Image
                src={img.thumbnail}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="gallery-common-thumb"
                priority={idx < 2}
              />
            </button>
          );
        })}
      </section>

      {/* Title & Description */}
      {(title || description) && (
        <div className="text-start mb-5 mt-4">
          {title && (
            <div className="heading-section mb-3 text-start">
              <h4 className="text-dark">{title}</h4>
            </div>
          )}
          {description && (
            <p className="small text-start text-dark">{description}</p>
          )}
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-flex flex-column"
          role="dialog"
          aria-modal="true"
          style={{ zIndex: 1050 }}
        >
          {/* Top bar */}
          <div className="d-flex align-items-center justify-content-between p-3 text-white">
            <div className="small">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={togglePlayPause}
                className="control-btn"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="control-btn"
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>
              <button
                onClick={handleClose}
                className="control-btn"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Main image with arrows */}
          <div
            className="flex-grow-1 d-flex align-items-center justify-content-center position-relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button onClick={goToPrev} className="nav-btn" style={{ left: "1rem" }}>
              <PrevIcon />
            </button>

            <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden">
              <Image
                key={key}
                src={images[currentIndex].original}
                alt={`Image ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className={`object-fit-contain ${
                  slideDirection === "left"
                    ? "animate-slide-left"
                    : slideDirection === "right"
                    ? "animate-slide-right"
                    : "animate-slide-in"
                }`}
                priority
                onTransitionEnd={() => setSlideDirection(null)}
              />
            </div>

            <button onClick={goToNext} className="nav-btn" style={{ right: "1rem" }}>
              <NextIcon />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="p-3 bg-dark overflow-auto">
            <div className="d-flex gap-2 justify-content-center">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`position-relative flex-shrink-0 rounded overflow-hidden border border-2 ${
                    index === currentIndex
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  style={{
                    width: "64px",
                    height: "64px",
                    transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image
                    src={img.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-fit-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles (animations kept as is) */}
      <style jsx global>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.45s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.45s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  description: PropTypes.string,
};
