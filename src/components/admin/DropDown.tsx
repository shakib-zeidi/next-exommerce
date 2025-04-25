import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Store } from "lucide-react";
import Link from "next/link";

interface DropDwonPropsInterface {
  btnName: string;
  subMenu: { id: number; name: string; link: string }[];
}

export default function DropDwon({ btnName, subMenu }: DropDwonPropsInterface) {
  return (
    <Menu as="div" className="relative inline-block">
      <div className="*:cursor-pointer">
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md text-white hover:text-black shadow-xs">
          <Store aria-hidden="true" size={15} />
          {btnName}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-53 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {subMenu.map((item) => (
          <div className="py-1" key={item.id}>
            <MenuItem>
              <Link
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                {item.name}
              </Link>
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
