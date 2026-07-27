import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Subtitles, BookOpen } from "lucide-react";

interface Subtitle {
  startTime: number; // in seconds
  endTime: number; // in seconds
  text: string;
}

const NIMT_SUBTITLES: Subtitle[] = [
  { startTime: 0, endTime: 3, text: "Welcome to NIMT School" },
  { startTime: 3, endTime: 6, text: "Our second home" },
  { startTime: 6, endTime: 10, text: "The life at NIMT Hostel is amazing" },
  { startTime: 10, endTime: 13, text: "We create beautiful memories throughout the day" },
  { startTime: 13, endTime: 17, text: "Wake up students" },
  { startTime: 17, endTime: 21, text: "5 minutes ma'am" },
  { startTime: 21, endTime: 30, text: "You said everyday" },
  { startTime: 30, endTime: 37, text: "Let's get ready for school" },
  { startTime: 37, endTime: 52, text: "Let's go for having a nutritious and delicious breakfast. Come." },
  { startTime: 52, endTime: 65, text: "Our hostel provides us a balanced diet with protein, vitamins, and energy to keep us active during the class." },
  { startTime: 65, endTime: 72, text: "It's 8:30. Now it's time to go to school." }
];

export default function InteractiveVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(72); // preset to 72s match transcript
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(true); // mute on start for smoother auto-loop
  const [showCaptions, setShowCaptions] = useState(true);
  const [currentCaption, setCurrentCaption] = useState("");
  const [activeSubtitleIdx, setActiveSubtitleIdx] = useState<number | null>(null);
  const [videoError, setVideoError] = useState(false);

  const videoSrc = "/videos/nimt.mp4";
  const thumbnailSrc = "nimt01.webp";

  // Scan current time against subtitle segments
  useEffect(() => {
    const subtitle = NIMT_SUBTITLES.find(
      (s) => currentTime >= s.startTime && currentTime <= s.endTime
    );
    if (subtitle) {
      setCurrentCaption(subtitle.text);
      const idx = NIMT_SUBTITLES.indexOf(subtitle);
      setActiveSubtitleIdx(idx);
    } else {
      setCurrentCaption("");
      setActiveSubtitleIdx(null);
    }
  }, [currentTime]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasStartedPlaying(true);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay or play issue: ", err);
        setVideoError(true);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      // Set actual duration if loaded, or fall back to 72
      setDuration(videoRef.current.duration || 72);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
      videoRef.current.muted = value === 0;
      setIsMuted(value === 0);
    }
  };

  const seekToTime = (seconds: number) => {
    setCurrentTime(seconds);
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      if (!isPlaying) {
        setHasStartedPlaying(true);
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const handleReset = () => {
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen().catch((err) => {
          console.warn("Fullscreen error: ", err);
        });
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-6" id="campus-tour-video">
      {/* Video Container Box */}
      <div 
        ref={containerRef}
        className="relative aspect-[16/10] w-full rounded-2xl bg-[#091026] overflow-hidden shadow-xl border border-slate-200 select-none group"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={thumbnailSrc}
          className="h-full w-full object-cover animate-fade-in"
          playsInline
          loop
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setVideoError(true)}
          onClick={togglePlay}
        />

        {/* Real Thumbnail Image Overlay (displayed before video is started for super fast loading / preview) */}
        {!hasStartedPlaying && (
          <div className="absolute inset-0 z-10 select-none pointer-events-auto">
            <img
              src={thumbnailSrc}
              alt="NIMT Boarding & Hostel Campus Life"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Background cinematic vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            
            {/* Play trigger overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <button
                onClick={togglePlay}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1344e6] text-white shadow-[0_8px_30px_rgb(19,68,230,0.5)] hover:scale-110 hover:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/25"
                aria-label="Play NIMT Hostel Video Tour"
              >
                <Play className="h-7 w-7 fill-current ml-1 text-white" />
              </button>
              <span className="mt-4 text-[11px] font-bold tracking-widest text-[#93c5fd] uppercase bg-slate-900/60 backdrop-blur-sm shadow border border-white/15 px-3.5 py-1.5 rounded-full">
                Play Tour Video
              </span>
            </div>
          </div>
        )}

        {/* Cinematic Netflix-style Captions Overlay */}
        {showCaptions && currentCaption && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-lg text-center pointer-events-none transition-all duration-300">
            <span className="inline-block px-4 py-2 bg-black/85 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg border border-white/10 tracking-wide text-shadow leading-relaxed">
              {currentCaption}
            </span>
          </div>
        )}

        {/* Error Fallback Graphics */}
        {videoError && (
          <div className="absolute inset-0 bg-[#0e172e] flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="p-3 bg-red-500/10 text-red-400 rounded-full mb-4">
              <RotateCcw className="h-6 w-6 animate-spin" />
            </div>
            <p className="text-sm font-semibold text-slate-200">Reconnecting with Campus Video Stream</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">Initializing local buffer</p>
          </div>
        )}

        {/* Hover Controls Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-40 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex flex-col gap-3 transition-opacity duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100">
          
          {/* Progress Slider Track */}
          <div className="flex items-center gap-3 w-full">
            <span className="text-[10px] font-mono font-bold text-white/80 shrink-0">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 72}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 accent-[#1344e6] h-1 bg-white/20 rounded-lg cursor-pointer hover:h-1.5 transition-all"
            />
            <span className="text-[10px] font-mono font-bold text-white/60 shrink-0">
              {formatTime(duration)}
            </span>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between">
            {/* Play controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer p-0.5"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
              </button>

              <button 
                onClick={handleReset}
                className="text-white/80 hover:text-white transition-colors cursor-pointer p-0.5"
                title="Reset Clip"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  {isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 accent-[#1344e6] h-1 bg-white/20 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Subtitles toggle and Fullscreen */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowCaptions(!showCaptions)}
                className={`transition-colors cursor-pointer p-1 rounded ${
                  showCaptions ? "text-blue-400 font-bold bg-white/10" : "text-white/70 hover:text-white"
                }`}
                title="Toggle Captions"
              >
                <Subtitles className="h-4.5 w-4.5" />
              </button>

              <button 
                onClick={handleFullScreen}
                className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
                title="Fullscreen"
              >
                <Maximize className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Start Overlay Splash Play Button when video is launched but paused */}
        {hasStartedPlaying && !isPlaying && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40">
            <button
              onClick={togglePlay}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1344e6] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/25"
            >
              <Play className="h-7 w-7 fill-current ml-1 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
