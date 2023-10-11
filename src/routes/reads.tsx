import { Component, onCleanup, createSignal } from "solid-js";
import { A } from "@solidjs/router";

import Navbar from "../components/navbar";

const Reads: Component = () => {
  const [markdownContent, setMarkdownContent] = createSignal("");
  const [tableData, setTableData] = createSignal([]);

  fetch("/src/assets/reads.md")
    .then((response) => response.text())
    .then((data) => {
      setMarkdownContent(data);
      const lines = data.trim().split("\n");
      const headers = lines[0].split("; ");
      const rows = lines.slice(1).map((line) => line.split("; "));
      setTableData({ headers, rows });
    })
    .catch((error) => {
      console.error("There was an error fetching the markdown content:", error);
      setMarkdownContent("Failed to load content.");
    });

  return (
    <div class="">
      <Navbar />
      <div class="relative overflow-x-auto p-4">
        {tableData().headers && tableData().rows && (
          <table class="w-full text-sm md:text-sm text-center text-gray-700">
            <thead class="uppercase rounded-sm border-y border-gray-500 ">
              <tr>
                {tableData().headers.map((header) => (
                  <th scope="col" class="px-6 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody class="hover:bg-gray-100">
              {tableData().rows.map((row) => (
                <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50">
                  {row.map((cell, cellIndex) =>
                    cellIndex === row.length - 1 ? (
                      <td>
                        <a class="p-2 hover:text-blue-800 hover:underline" href={cell}>
                          {cell}
                        </a>
                      </td>
                    ) : (
                      <td class="p-2">{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reads;
