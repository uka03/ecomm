import { MENUS } from "../../util/data";

export default function Navbar() {
  return (
    <nav class="bg-white border-gray-200 px-2  py-2.5 rounded">
      <ul class="flex justify-end gap-9 p-4 mt-4 border w-full rounded-lg bg-gray-50 ">
        {MENUS.map((menu, index) => {
          return (
            <li key={index}>
              <a
                href={menu.url}
                class="block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded-3xl"
              >
                {menu.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
