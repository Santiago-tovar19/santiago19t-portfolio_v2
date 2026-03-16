import React from "react";

export default function Educacion() {
  return (
    <div class="relative overflow-x-auto shadow-md rounded-lg w-full h-full">
      <table class="w-full text-sm text-left text-gray-500 h-full">
        <thead class="text-xs text-white uppercase bg-[#13bcffda] h-[75px]">
          <tr>
            <th scope="col" class="px-3 md:px-6 py-3">Educación</th>
            <th scope="col" class="px-3 md:px-6 py-3">Institución</th>
            <th scope="col" class="px-3 md:px-6 py-3">Años</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-[#1b1f24] border-b border-gray-700 h-24">
            <th scope="row" class="px-3 md:px-6 py-4 font-medium text-white">
              Educación Universitaria <br /> (Ing Industrial)
            </th>
            <td class="px-3 md:px-6 py-4 text-white">IUP Santiago Mariño</td>
            <td class="px-3 md:px-6 py-4 text-white">2021 - 2026</td>
          </tr>
          <tr class="bg-[#1b1f24] border-b border-gray-700 h-24">
            <th scope="row" class="px-3 md:px-6 py-4 font-medium text-white">
              Educación Secundaria
            </th>
            <td class="px-3 md:px-6 py-4 text-white">UEP Cecilio Acosta IV</td>
            <td class="px-3 md:px-6 py-4 text-white">2016 - 2021</td>
          </tr>
          <tr class="bg-[#1b1f24] border-b border-gray-700 h-24">
            <th scope="row" class="px-3 md:px-6 py-4 font-medium text-white">
              Educación Primaria
            </th>
            <td class="px-3 md:px-6 py-4 text-white">UEP Cecilio Acosta IV</td>
            <td class="px-3 md:px-6 py-4 text-white">2011 - 2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
