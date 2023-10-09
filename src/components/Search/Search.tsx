import { IconButton, InputAdornment, InputBase } from '@mui/material';
import { ChangeEvent } from 'react';
import StyledSearchComponent from './StyledSearchComponent';
import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import { search } from 'src/shared/GeneralIcon/icons.constants';

type SearchComponentProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({
  onChange,
  value,
  onClick
}: SearchComponentProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <StyledSearchComponent>
      <InputBase
        type="search"
        className="serch-input"
        placeholder="Type the city"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        startAdornment={
          <InputAdornment position="start">
            <IconButton onClick={onClick} aria-label="search">
              <GeneralIcon src={search} />
            </IconButton>
          </InputAdornment>
        }
      />
    </StyledSearchComponent>
  );
};

export default SearchComponent;
