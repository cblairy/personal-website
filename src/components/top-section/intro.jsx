import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Intro = ({ isLoading }) => {
    const { t } = useTranslation();

    const words = useMemo(() => [
        t('topSection.words.1'),
        t('topSection.words.2'),
        t('topSection.words.3'),
        t('topSection.words.4'),
    ], [t]);
    const wordsLineOne = t('topSection.2');
    const wordsLineTwo = t('topSection.3');

    const [lineOne, setLineOne] = useState('');
    const [lineTwo, setLineTwo] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isUp, setIsUp] = useState(true);

    /******** DYNAMICALLY WRITTEN WORDS ********/
    useEffect(() => {
        if (lineTwo.length === wordsLineTwo.length){

            const intervalId = setInterval(() => {
                if (letterIndex === words[wordIndex].length && isUp){
                    setTimeout(() => {
                        setIsUp(false);
                    }, 700);
                }

                else if (letterIndex === 0 && !isUp) {
                    setIsUp(true);
                    
                    if (wordIndex === words.length - 1) 
                        setWordIndex(0)
    
                    else if (letterIndex === 0)
                        setWordIndex(wordIndex + 1);
                }

                setLetterIndex((letterIndex) => letterIndex + (isUp ? 1 : -1));
            }, 100);
            return () => clearInterval(intervalId);
        }

    }, [isUp, letterIndex, wordIndex, words, lineTwo, wordsLineTwo]);

    /******** FIRST SENTENCE ********/
    useEffect(() => {
        if (!isLoading) {

            const intervalId = setInterval(() => {
                if (lineOne.length === wordsLineOne.length)
                    clearInterval(intervalId);

                else
                    setLineOne((prevLineOne) => wordsLineOne.substring(0, prevLineOne.length + 1));

            }, 80);

            return () => clearInterval(intervalId);
        }

    }, [isLoading, wordsLineOne, lineOne]);

    /******** SECOND SENTENCE ********/
    useEffect(() => {
        const intervalId = setInterval(() => {
            const continueExecution = () => {
                if (lineTwo.length === wordsLineTwo.length) 
                    clearInterval(intervalId);

                else
                    setLineTwo((prevLineTwo) => wordsLineTwo.substring(0, prevLineTwo.length + 1));
            }

            if (lineOne.length !== wordsLineOne.length)
                return;

            else {
                const timeoutId = setTimeout(() => {
                    continueExecution();
                }, 1000);
              
                return () => clearTimeout(timeoutId);
            }    
        }, 80);
    
        return () => clearInterval(intervalId);

    }, [lineOne, wordsLineTwo, lineTwo, wordsLineOne]);

    return (
        <div className="welcome">
        <p>{t('topSection.1')}</p>
        <p className="line-one-intro">{lineOne}</p>
        <p className="line-two-intro">{`${lineTwo} ${words[wordIndex].substring(0, letterIndex)}`}</p>
        </div>
    );
};

export default Intro;
