import CartButton from "./CartButton";
import SearchButton from "./SearchButton";
import UserButton from "./UserButton";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <SearchButton />
      <CartButton />
      <UserButton />
    </div>
  );
}
