import './App.css';


const BackgroundIframeStyle = {
  "aspect-ratio": "auto 16 / 9",
};

function App() {
  return (
    <div>
      <header>
        <h1>Hello  Tarkov Gamers!!!</h1>
        <div>
        <iframe 
        src="https://www.youtube.com/embed/gEbJjN6rtQE?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;mute=1"
        frameborder="0"
        allow="fullscreen"
        style={BackgroundIframeStyle}
        title="Escape from Tarkov ARENA"></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
