"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#f7f8fc]">
      {/* Sidebar */}
      <div className={`relative bg-white shadow-md ${isSidebarOpen ? 'w-48' : 'w-16'} transition-all duration-300 ease-in-out`}>
        <div className="py-4 px-6 flex items-center justify-between">
          {isSidebarOpen && <h1 className="text-xl font-bold leading-5">Clini<br /><span className='text-[#008080]'>Vention</span></h1>}
          {isSidebarOpen && <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}><i className="fa-solid fa-times cursor-pointer text-lg"></i></button>}
          {!isSidebarOpen && <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}><i className="fa-solid fa-bars cursor-pointer text-xl"></i></button>}
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col gap-2 py-4 pl-2 text-[#48535b]">
          <a className="flex flex-col font-medium items-center gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-chart-pie"></i> {isSidebarOpen && 'Dashboard'}
          </a>
          <a className="flex items-center flex-col font-medium gap-1 p-2 border-l-4 border-[#008080] bg-[#e3f1f1] cursor-pointer text-[#008080]">
            <i className="fa-solid fa-user-plus"></i> {isSidebarOpen && 'Patient'}
          </a>
          <a className="flex items-center flex-col font-medium gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-calendar-days"></i> {isSidebarOpen && 'Appointment'}
          </a>
          <a className="flex items-center flex-col font-medium gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-file-invoice-dollar"></i> {isSidebarOpen && 'Billing'}
          </a>
          <a className="flex items-center flex-col font-medium gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-stethoscope"></i> {isSidebarOpen && 'Doctor'}
          </a>
          <a className="flex items-center flex-col font-medium gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-sliders"></i> {isSidebarOpen && 'Setting'}
          </a>
          <a className="absolute bottom-2 left-0 right-0 flex items-center flex-col font-medium gap-1 p-2 hover:bg-[#e3f1f1] cursor-pointer">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> {isSidebarOpen && 'Log Out'}
          </a>
        </nav>
      </div>

      <div className='flex-1'>
        {/* Hearder */}
        <div className="flex-1 px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between tx">
            <div className='flex items-center gap-3 text-[#909090] cursor-pointer'>
              <i className="fa-solid fa-house"></i>
              <h1 className="text-lg">Curevention Clinic Center</h1>
              <i className="fa-solid fa-chevron-down fa-xs ml-1"></i>
            </div>
            <div className="flex items-center gap-5">
              <div className='cursor-pointer'>
                <div className='bg-red-500 h-1.5 w-1.5 rounded-full -mb-2.5 ml-3' style={{ zIndex: 1 }}></div>
                <i className="fa-regular fa-bell fa-lg"></i>
              </div>
              <Image src="/avatar.png" alt='Profile picture' width={40} height={40} className="rounded-full cursor-pointer" />
              <div className='flex-col items-center'>
                <p className="text-sm font-medium">Dr. Suchita Gupta</p>
                <p className='text-xs text-[#909090]'>General Physician</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className='flex flex-row gap-6 items-center text-[#666666]'>
              <div className='relative cursor-pointer'>
                <input className='bg-white max-w-md py-2.5 px-4 rounded-md outline-none placeholder-[#666666]' placeholder='Search' />
                <div className='absolute right-3.5 top-3'>
                  <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
              </div>
              <p className='cursor-pointer'>Filter</p>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-5 text-sm text-[#666666] cursor-pointer'>
                <div className='flex items-center border border-[#DCDFE3] w-10 h-10 rounded-full justify-center'>
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <p className='font-medium text-[#3B3E45]'>March 10, 2025</p>
                <p>Today</p>
                <i className="fa-solid fa-chevron-down fa-xs ml-1"></i>
                <div className='flex items-center border border-[#DCDFE3] w-10 h-10 rounded-full justify-center'>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <button className='border-2 border-[#008080] text-[#008080] py-2 px-4 rounded-lg font-medium'><i className="fa-solid fa-user-plus mr-3"></i>Add New Patient</button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white overflow-hidden">
            <div className='flex items-center justify-start font-medium px-2 pb-2 text-[#666666]'>
              <div className='py-1.5 pr-6 pl-1 flex gap-3'>Patient's
                <div className='flex items-center justify-center w-6 h-6 text-sm bg-[#cce6e6] text-[#008080] rounded-full'>8</div>
              </div>
              <div className='py-1.5 px-6 flex gap-3 bg-[#e4e5e9]'>Draft
                <div className='flex items-center justify-center w-6 h-6 text-sm bg-[#666666] text-[#e6e6e6] rounded-full'>6</div>
              </div>
            </div>
            <table className="w-full table-auto">
              <thead className="bg-white border-b text-sm text-[#666666] text-left">
                <tr>
                  <th className="p-3 font-medium">PID<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Name<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Date of Birth<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Gender<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Mobile<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Email<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Last Appointment<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                  <th className="p-3 font-medium">Action<i className="fa-solid fa-sort ml-1.5 fa-xs"></i></th>
                </tr>
              </thead>
              <tbody className=''>
                {[...Array(7)].map((_, i) => (
                  <tr key={i} className="border-b text-sm text-[#666666]">
                    <td className="p-3">CCC.{10 - i}</td>
                    <td className="p-3">Mr. Manish Kumar</td>
                    <td className="p-3">20-Sep-2002</td>
                    <td className="p-3">Male</td>
                    <td className="p-3">+91 00000 00000</td>
                    <td className="p-3">manish@gmail.com</td>
                    <td className="p-3">10-March-2025</td>
                    <td className="p-3"><i className="fa-solid fa-ellipsis-vertical ml-5 cursor-pointer text-[#666666]"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
}
