import { ChangeEvent } from 'react';
import SearchComponent from '../Search/Search';
import StyledHeader from './StyledHeader';

type HeaderProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ value, onChange, onClick }: HeaderProps) => {
  return (
    <StyledHeader>
      <div className="container">
        <SearchComponent onChange={onChange} value={value} onClick={onClick} />
      </div>
    </StyledHeader>
  );
};

export default Header;
