"use client";

export default function VideoSection() {
  return (
    <div className="heroBgVideo">
        <video autoPlay muted loop>
            <source src="/videos/hd-group-desktop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="heroText">
            <span style={{ "--i": 0 }}>B</span>
            <span style={{ "--i": 1 }}>u</span>
            <span style={{ "--i": 2 }}>i</span>
            <span style={{ "--i": 3 }}>l</span>
            <span style={{ "--i": 4 }}>d</span>
            <span style={{ "--i": 5 }}>i</span>
            <span style={{ "--i": 6 }}>n</span>
            <span style={{ "--i": 7 }}>g</span>
            <span style={{ "--i": 15 }}>&nbsp;</span>
            <span style={{ "--i": 8 }}>L</span>
            <span style={{ "--i": 9 }}>a</span>
            <span style={{ "--i": 10 }}>s</span>
            <span style={{ "--i": 11 }}>t</span>
            <span style={{ "--i": 12 }}>i</span>
            <span style={{ "--i": 13 }}>n</span>
            <span style={{ "--i": 14 }}>g</span>
            <span style={{ "--i": 15 }}>&nbsp;</span>
            <span style={{ "--i": 16 }}>L</span>
            <span style={{ "--i": 17 }}>e</span>
            <span style={{ "--i": 18 }}>g</span>
            <span style={{ "--i": 19 }}>a</span>
            <span style={{ "--i": 20 }}>c</span>
            <span style={{ "--i": 21 }}>i</span>
            <span style={{ "--i": 22 }}>e</span>
            <span style={{ "--i": 23 }}>s</span>
            <span style={{ "--i": 24 }}>.</span>
        </div>

        <div className="scrollButton">
            <div className="scrollbarButton">
                <span className="scrollbarBg"></span>
                <span className="scrollbarFg"></span>
            </div>
            <p className="scrollButtonText">Find out how</p>
        </div>
    </div>
  );
}
