import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  CameraIcon,
  VideoCameraIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image1 from '@/images/callendar/image-1.jpeg'
import Image2 from '@/images/callendar/image-2.png'
import Image3 from '@/images/callendar/image-3.png'
import Image4 from '@/images/callendar/image-4.png'
import Image5 from '@/images/callendar/image-5.jpeg'
import Image6 from '@/images/callendar/image-6.png'
import Image7 from '@/images/callendar/image-7.jpg'
import Image8 from '@/images/callendar/image-8.png'
import Image9 from '@/images/callendar/image-9.jpeg'
const meetings = [
  {
    id: 1,
    date: 'April 10th, 2023',
    time: '4:00 PM',
    datetime: '2023-01-10T17:00',
    name: 'Cynthia Blackman',
    imageUrl: Image1.src,
    location: 'Remote',
  },

  {
    id: 1,
    date: 'April 10th, 2023',
    time: '5:30 PM',
    datetime: '2023-01-10T17:00',
    name: 'Fatou Diabate',
    imageUrl: Image6.src,
    location: 'My Gym',
  },
  {
    id: 1,
    date: 'April 11th, 2023',
    time: '8:00 AM',
    datetime: '2023-01-10T17:00',
    name: 'Robert Mansour',
    imageUrl: Image5.src,
    location: 'YMCA',
  },
  {
    id: 1,
    date: 'April 11th, 2023',
    time: '10:30 PM',
    datetime: '2023-01-10T17:00',
    name: 'Dady Jolie Konate',
    imageUrl: Image8.src,
    location: 'Unspecified',
  },
  {
    id: 1,
    date: 'Aprol 12th, 2023',
    time: '11:30 PM',
    datetime: '2023-01-10T17:00',
    name: 'Sarah Foster',
    imageUrl: Image4.src,
    location: 'Remote',
  },
  {
    id: 1,
    date: 'April 13th, 2023',
    time: '3:00 PM',
    datetime: '2023-01-10T17:00',
    name: 'Ana Walton',
    imageUrl: Image3.src,
    location: 'YMCA',
  },
  {
    id: 1,
    date: 'April 14th, 2023',
    time: '5:00 PM',
    datetime: '2023-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
  },

  {
    id: 1,
    date: 'April 14th, 2023',
    time: '6:00 PM',
    datetime: '2023-01-10T17:00',
    name: 'Vincent Steward',
    imageUrl: Image2.src,
    location: 'YMCA',
  },

  {
    id: 1,
    date: 'April 15th, 2023',
    time: '10:00 AM',
    datetime: '2023-01-10T17:00',
    name: 'Dejah Careington',
    imageUrl: Image9.src,
    location: 'Unspecified',
  },
  // More meetings...
]
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2023-01-01', isCurrentMonth: true },
  { date: '2023-01-02', isCurrentMonth: true },
  { date: '2023-01-03', isCurrentMonth: true },
  { date: '2023-01-04', isCurrentMonth: true },
  { date: '2023-01-05', isCurrentMonth: true },
  { date: '2023-01-06', isCurrentMonth: true },
  { date: '2023-01-07', isCurrentMonth: true },
  { date: '2023-01-08', isCurrentMonth: true },
  { date: '2023-01-09', isCurrentMonth: true },
  { date: '2023-01-10', isCurrentMonth: true },
  { date: '2023-01-11', isCurrentMonth: true },
  { date: '2023-01-12', isCurrentMonth: true, isToday: true },
  { date: '2023-01-13', isCurrentMonth: true },
  { date: '2023-01-14', isCurrentMonth: true },
  { date: '2023-01-15', isCurrentMonth: true },
  { date: '2023-01-16', isCurrentMonth: true },
  { date: '2023-01-17', isCurrentMonth: true },
  { date: '2023-01-18', isCurrentMonth: true },
  { date: '2023-01-19', isCurrentMonth: true },
  { date: '2023-01-20', isCurrentMonth: true },
  { date: '2023-01-21', isCurrentMonth: true },
  { date: '2023-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2023-01-23', isCurrentMonth: true },
  { date: '2023-01-24', isCurrentMonth: true },
  { date: '2023-01-25', isCurrentMonth: true },
  { date: '2023-01-26', isCurrentMonth: true },
  { date: '2023-01-27', isCurrentMonth: true },
  { date: '2023-01-28', isCurrentMonth: true },
  { date: '2023-01-29', isCurrentMonth: true },
  { date: '2023-01-30', isCurrentMonth: true },
  { date: '2023-01-31', isCurrentMonth: true },
  { date: '2023-02-01' },
  { date: '2023-02-02' },
  { date: '2023-02-03' },
  { date: '2023-02-04' },
  { date: '2023-02-05' },
  { date: '2023-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  return (
    <Container>
      <div>
        <h2 className="mt-14 mb-4  px-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:mb-28 sm:mb-4 sm:mt-28 sm:text-5xl">
          Upcoming meetings
        </h2>

        <div className="px-4 sm:px-0 lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
            <div className="flex items-center text-gray-900">
              <button
                type="button"
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon
                  className="py.0.5 h-5 w-5 rounded-full bg-slate-300 px-0.5 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </button>
              <div className="flex-auto text-lg font-semibold dark:text-slate-200">
                April
              </div>
              <button
                type="button"
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon
                  className="py.0.5 h-5 w-5 rounded-full bg-slate-300 px-0.5 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    'py-1.5 hover:bg-gray-100 focus:z-10',
                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                    (day.isSelected || day.isToday) && 'font-semibold',
                    day.isSelected && 'text-white',
                    !day.isSelected &&
                      day.isCurrentMonth &&
                      !day.isToday &&
                      'text-gray-900',
                    !day.isSelected &&
                      !day.isCurrentMonth &&
                      !day.isToday &&
                      'text-gray-400',
                    day.isToday && !day.isSelected && 'text-indigo-600',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === days.length - 7 && 'rounded-bl-lg',
                    dayIdx === days.length - 1 && 'rounded-br-lg'
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                      day.isSelected && day.isToday && 'bg-indigo-600',
                      day.isSelected && !day.isToday && 'bg-gray-900'
                    )}
                  >
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="mt-8 w-full rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book session
            </button>
          </div>

          <ol className="mt-14 divide-y divide-gray-100 text-sm leading-6 sm:mt-4 lg:col-span-7 xl:col-span-8">
            <h4 className="mb-5 px-5 text-xl dark:text-slate-400 sm:mb-20 sm:px-6">
              Scheduled
            </h4>
            {meetings.map((meeting) => (
              <li
                key={meeting.id}
                className="relative flex space-x-6 py-6 xl:static"
              >
                <img
                  src={meeting.imageUrl}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex-auto">
                  <h3 className="pr-10 font-semibold text-gray-900 dark:text-slate-300 xl:pr-0">
                    {meeting.name}
                  </h3>
                  <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <CalendarIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd className="dark:text-slate-300/80">
                        <time dateTime={meeting.datetime}>
                          {meeting.date} at {meeting.time}
                        </time>
                      </dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        {meeting.location !== 'Remote' ? (
                          <MapPinIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <VideoCameraIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        )}
                      </dt>
                      <dd>{meeting.location}</dd>
                    </div>
                  </dl>
                </div>
                <Menu
                  as="div"
                  className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
                >
                  <div>
                    <Menu.Button className="-m-2  flex items-center rounded-full bg-slate-200 p-2 text-gray-500 hover:text-gray-600">
                      <span className="sr-only">Edit or cancel</span>
                      <EllipsisHorizontalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Cancel
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  )
}
