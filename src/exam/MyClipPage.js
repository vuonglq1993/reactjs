import React from "react";
import myClips from "./MyClip.json";
import "./MyClip.css";

function Web() {
    const videoId = 'ahJ2DEh8UPg'; 

  return (
    <div>
        <header>
            <p><strong>Aptect Studio</strong></p>
            <p>My Clips</p>
        </header>
        <main>

      <div className="clip row justify-content-center">
      <h2 className="h2item">My Clip</h2>
            <div className="large-clip">
            <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        <div className='col-10'>
        {myClips.map((clip, index) => (
          <div key={index} className="items">

            <iframe
              src={clip.source_clip.replace("watch?v=", "embed/")}
              title={clip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
                        <div className='line1'>
            <h3>{clip.title}</h3>
            <span>{clip.start}</span>
            </div>
            {clip.description}
          </div>
        ))}
        </div>
        </div>
      </main>
      <footer>
      <p><strong>FPT Aptect</strong></p>

      </footer>
</div>
  );
}

export default Web;
