import React from 'react';
import $ from 'jquery';

const Intro = (props) => {
  let words = [
    'Junior.',
    'Web.',
    'Python.'
  ],
  wordsLineOne = "je m'appelle Corentin Blairy.",
  wordsLineTwo = "Je suis developpeur ",
  partLineOne,
  partLineTwo,
  dynamicWords,
  i = 0,
  offset = 0,
  offset2 = 0,
  offset3 = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 18,
  speed = 100,
  isStop = false,
  lineOneIsEnd = false,
  textIntro = "";

  // gestion de mots dynamiques en intro
  let wordflick = function(){
    setInterval(function(){

      if(isStop) {
        if (forwards) {
          if(offset3 >= words[i].length){
            ++skip_count;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        }
        else {
          if(offset3 === 0){
              forwards = true;
              i++;
              offset3 = 0;
              if(i >= len){
                i=0;
              } 
          }
        }

        // ajouter ou retirer une lettre du mot en cours
        dynamicWords = textIntro + " "+ words[i].substring(0, offset3);
        if (skip_count === 0) {
          if (forwards) {
            offset3++;
          }
          else {
            offset3--;
          }
        }
      }
        $('.lineTwoIntro').text(dynamicWords);
    },speed);
  };

  // 1ere ligne d'intro
  function dynamicIntroLineOne(){
    setInterval(function(){
      if(offset > wordsLineOne.length) {
        if(lineOneIsEnd === false){
          
          setTimeout(() => {
            lineOneIsEnd = true;
          }, 1000);
          
          clearInterval(dynamicIntroLineOne);
        }
      } else {
        partLineOne = wordsLineOne.substring(0, offset);
        offset++;
        $('.lineOneIntro').text(partLineOne);
      }
    }, 90);
  }

  // 2eme ligne d'intro
  function dynamicIntroLineTwo(){
    setInterval(function(){
      if(lineOneIsEnd) {
        if(offset2 > wordsLineTwo.length) {
          clearInterval(dynamicIntroLineTwo);
          if(isStop === false){
            textIntro = document.querySelector(".lineTwoIntro").innerText;
            isStop = true;
          }
        } else {
          partLineTwo = wordsLineTwo.substring(0, offset2);
          offset2++;
          $('.lineTwoIntro').text(partLineTwo);
        }
      }
    }, 90);

  };

  $(function(){
    dynamicIntroLineOne();
    dynamicIntroLineTwo();
    wordflick();

    
  });

  return (
    <div className='welcome'>
      <p>Bienvenue,</p>
      <p className='lineOneIntro'></p>
      <p className='lineTwoIntro'></p>
    </div>
  );
};

export default Intro;