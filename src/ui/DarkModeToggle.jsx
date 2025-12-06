import ButtonIcon from './ButtonIcon';
import { useDarkMode } from '../context/DarkModeContext';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? (
                <FiSun className="icons_theme" />
            ) : (
                <BsMoonStars className="icons_theme" />
            )}
        </ButtonIcon>
    );
}

export default DarkModeToggle;
