/* This example requires Tailwind CSS v2.0+ */
import { Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { BarsArrowDownIcon, BarsArrowUpIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { MdSearch } from "react-icons/md";
import { useNavbar } from "./useNavbar";

const navigation = [
  { name: 'Random Meal', href: '/' },
  { name: 'Category', href: '/Category' },
  { name: 'Area', href: '/Area' },
  { name: 'Main Ingredient', href: '/MainIngredient' },
]

export default function Navbar() {

  const {
    searchValue,
    setSearchValue,
    handleSubmit,
  } = useNavbar();

  return (
    <div className="relative bg-gray-50">
      <div className="relative pt-6 pb-5">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/"><img className="h-auto w-auto"  src="images/home.png" alt="Home" /></Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <BarsArrowDownIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                ))}
                
              </div>
              
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}/>
                    </div>
                  </div>
                </form>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="images/home.png" 
                      alt="Home" 
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MdSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                          id="search"
                          name="search"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <BarsArrowUpIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}
