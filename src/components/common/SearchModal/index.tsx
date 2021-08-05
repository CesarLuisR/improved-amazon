import Portal from "../../layout/Portal";
import SearchBar from "../../common/SearchBar";

import { SearchBarModalWrapper, MenuIcon } from "../../layout/Menu/styles";

type SearchModalProps = (props: {
  categories: string[];
  handleModal: (component: string, to: string) => void;
}) => React.ReactElement;

const SearchModal: SearchModalProps = ({ categories, handleModal }) => {
  return (
    <Portal>
      <SearchBarModalWrapper>
        <SearchBar categories={categories} />
        <MenuIcon onClick={() => handleModal("search", "close")}>
          <span className="material-icons">close</span>
        </MenuIcon>
      </SearchBarModalWrapper>
    </Portal>
  );
};

export default SearchModal;
