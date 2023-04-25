import React, { useEffect } from 'react';
import $ from 'jquery';

const Intro = (props) => {
    

   /******** STARTS THE TEXT WHEN THE PAGE IS LOADED ********/
    useEffect(() => {
        let words = [
            'Web.',
            'Junior.',
            'Full-Stack.',
            'Python.'
        ],
        wordsLineOne = "Je m'appelle Corentin Blairy.",
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
        skip_delay = 25,
        speed = 70,
        isStop = false,
        lineOneIsEnd = false,
        textIntro = "";
    
        /******** DYNAMIC WORD MANAGEMENT IN INTRO ********/
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
                    } else {
                        if(offset3 === 0){
                            forwards = true;
                            i++;
                            offset3 = 0;
    
                            if(i >= len){
                                i=0;
                            } 
                        }
                    }
    
                    /******** ADD OR REMOVE A LETTER FROM THE CURRENT WORD ********/
                    dynamicWords = textIntro + " "+ words[i].substring(0, offset3);
    
                    if (skip_count === 0) {
                        if (forwards) {
                            offset3++;
                        } else {
                            offset3--;
                        }
                    }
                }
    
                $('.line-two-intro').text(dynamicWords);
            },speed);
        };
    
        /******** FIRST LINE INTRO ********/
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
                    $('.line-one-intro').text(partLineOne);
                }
            }, speed);
        }
    
        /******** 2ND LINE INTRO ********/
        function dynamicIntroLineTwo(){
            setInterval(function(){
    
                if(lineOneIsEnd) {
    
                    if(offset2 > wordsLineTwo.length) {
                        clearInterval(dynamicIntroLineTwo);
    
                        if(isStop === false){
                            textIntro = document.querySelector(".line-two-intro").innerText;
                            isStop = true;
                        }
    
                    } else {
                        partLineTwo = wordsLineTwo.substring(0, offset2);
                        offset2++;
                        $('.line-two-intro').text(partLineTwo);
                    }
                }
            }, speed);
        };

        if (!props.isLoading) {
            dynamicIntroLineOne();
            dynamicIntroLineTwo();
            wordflick(); 
        }

    }, [props.isLoading]);

    return (
        <div className='welcome'>
            <p>Bienvenue,</p>
            <p className='line-one-intro'></p>
            <p className='line-two-intro'></p>
        </div>
    );
};

export default Intro;