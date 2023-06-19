"use client";

import { NavItems, type NavLink } from "@/lib/nav-links";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link href="/" className="group w-full items-center gap-x-2">
          <div className="flex items-center h-14 lg:h-auto p-4">
            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-100 transition ease-in-out duration-200 hover:-translate-y-1 hover:translate-x-1">
              Pokemon/Music API
            </h3>
          </div>
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden transition ease-in-out duration-200"
      >
        <div className="font-medium text-gray-100 hover:text-gray-500 transition ease-in-out duration-200">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400 hover:text-gray-500 animate-fadeIn" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400 hover:text-gray-500 animate-fadeIn" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          {NavItems.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.links.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: NavLink;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-white transition ease-in-out duration-300 hover:translate-x-1 hover:-translate-y-1",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
