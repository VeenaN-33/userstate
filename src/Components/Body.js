import React, { useState } from 'react'
import './Body.css'
import Image from './vee.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }
    const [anime, setAnime] = useState([
      { anime: 'demon slayer' },
      { anime: 'kaisen' },
      { anime: 'jujutsu' }
  ])
  const [index, setIndex] = useState(0)  // 1
  function change() {  //0+1%3
      const newIndex = (index + 1) % anime.length
      setIndex(newIndex)
  }

    

    return (
        <div>
            <div>
                <img src={Image} alt="images" height={200} width={200}/> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'margin', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/shorts/DVe5vtdh7i0'} height={200} width={200} controls />
                <div>
                    <p>i like this anime </p>
                </div>
            </div>
            <p>i like this {anime[index].anime}</p>
            <button onClick={change}>Change me</button>
        </div>
    )
}
export default Body