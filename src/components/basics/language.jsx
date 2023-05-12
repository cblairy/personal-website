import React, { ChangeEvent, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from '../../translations/languages';
 
import enLogo from '../../assets/images/icons/drapeau-anglais-rond.png';
import frLogo from '../../assets/images/icons/fr.png';

const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);


    const handleLanguageChange = (event) => {
        const language = event.currentTarget.value;

        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }
 
    return (
        <div>
            <div className="translation-buttons">
                <button value={Language.FR} onClick={(event) => handleLanguageChange(event)} ><img src={frLogo} alt="" /></button>
                <button value={Language.EN} onClick={(event) => handleLanguageChange(event)} ><img src={enLogo} alt="" /></button>
                
            </div>
        </div>
    )
}
 
export default Lang;