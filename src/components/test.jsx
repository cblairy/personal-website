import React from 'react';
import $ from 'jquery';
import "./test.scss";


const Test = () => {

  var words = [
    'Junior',
    'Web et mobile',
    'Python'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 160;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = "Bienvenue, je m'appelle Corentin Blairy. Je suis un developpeur " + words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});
  return (
    <div className="word">
      
    </div>
  );
};

export default Test;