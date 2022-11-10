import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe';

function IframeContent(props) {
  console.log("ffgjksdfg", props.video);
  const [idd, setId] = useState('https://www.youtube.com/embed/');

  useEffect(() => {
    if (props.video != undefined) {
      let temp = 'https://www.youtube.com/embed/' + props.video
      setId(temp);
      console.log("url1", temp)
    }
  }, [props.video]);
  return (
    <div>
      <Iframe url={idd}
        width="420" height="315" src={idd} frameborder="0" allowfullscreen />
    </div>
  )
}

export default IframeContent