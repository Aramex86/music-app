import { ReactNode } from "react";
import { StyledSearch } from "./SearchBox.style";

interface SearchBoxType {
  value?: string;
  defautValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sufix?: ReactNode;
  prefix?: ReactNode;
  placeholder?: string;
}
export const SearchBox = (props: SearchBoxType) => {
  console.log(props);
  return (
    <>
      <StyledSearch
        onChange={props.onChange}
        placeholder={props.placeholder}
        prefix={props.prefix}
      />
    </>
  );
};
